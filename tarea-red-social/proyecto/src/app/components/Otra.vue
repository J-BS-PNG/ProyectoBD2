
<template>
  <div v-if="doorChat">
    <input type="text" placeholder="Escriba la persona 1" v-model="u1" />
    <input type="text" placeholder="Escriba la persona 2" v-model="u2" />
    <button @click="visualChat">Presione para entrar</button>
  </div>
  <div v-else>
    <div class="divInf">
      <label>Informacion de persona con que se habla</label>
    </div>
    <div class="divRight">
      <div v-for="mess in chat.messages" :key="mess">
        <div v-if="mess.creator === 'Josue'">
          <h4 style="color: red">{{ mess.creator }}</h4>
          <h3>{{ mess.text }}</h3>
        </div>
        <div v-else>
          <h4 style="color: Blue">{{ mess.creator }}</h4>
          <h3>{{ mess.text }}</h3>
        </div>
      </div>
    </div>
    <div class="divInput" style="background: green">
      <textarea
        placeholder="escriba"
        class="textarea"
        v-model="message.text"
      ></textarea>
      <button class="button" @click="addChat">Enviar</button>
    </div>
  </div>
</template>

<script>
class Message {
  constructor(creator, text) {
    this.creator = creator;
    this.text = text;
  }
}
class Chat {
  constructor(user1, user2, messages) {
    this.user1 = user1;
    this.user2 = user2;
    this.messages = messages;
  }
}
const socket = io();
export default {
  data() {
    return {
      chat: new Chat("Josue", "Marco", []),
      message: new Message(),
      doorChat: true,
      chatId: "",
      u1: "",
      u2: "",
    };
  },
  methods: {
    addChat() {
      var choice = this.chat.messages.length;
      if (choice % 2 == 0) {
        this.message.creator = "Josue";
      } else {
        this.message.creator = "Brandon";
      }

      if (this.message.text != undefined && this.message.text.trim() != "") {
        this.chat.messages.push(this.message);
      }

      socket.emit("chat-message", this.chat);

      if (this.chat.messages == []) {
        fetch("/chats", {
          method: "POST",
          body: JSON.stringify(this.chat),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      } else {
        fetch("/chats/" + this.chatId, {
          method: "PUT",
          body: JSON.stringify(this.chat),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      }
      this.message = new Message();
    },
    visualChat() {
      fetch("/chats/" + this.u1 + "/user2/" + this.u2)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.chatId = data[0]._id;
          this.chat = data[0];
          this.doorChat = false;
        });
    },
  },
  mounted() {
    socket.on("chat-message", (msg) => {
      this.chat = msg;
      setTimeout(() => {
        const chatContainer = document.querySelector(".chat-container");
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 10);
    });
  },
};
</script>



