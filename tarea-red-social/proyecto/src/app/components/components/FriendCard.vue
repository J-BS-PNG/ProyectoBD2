
<template>
    <ul>
        <li class = 'list-item' v-for="item in list" :key="item.id">
            <div class ="content" >
                <img v-bind:src = img>
                <div class="main">
                    <div class="header">
                        <span class = "Name">{{item.name}}</span>
                    </div>
                    <div class = "body">
                        {{"Amigos"}}
                    </div>
                </div>
            </div>
        </li>
    </ul>

</template>
<script>
import axios from "axios";
export default {
  name: 'FriendCard',
    data(){
        return {
        list: this.getFriends(),
        img: "https://freepngimg.com/thumb/toothless/167955-pic-toothless-dragon-png-download-free.png"
        }
    },
    created: function(){
        this.getFriends();
    },
    methods: {
        // Create New product
        async getFriends() {
            try {
                const response = await axios.get(`http://localhost:5000/friends/friendships/Eduardj.Com@gmail.com`);
                console.log(response.data);
                this.list = response.data;
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>

<style scoped>
ul {
  padding-top: 18px;
  width: 90vw;
  background-color: #97DFFC;
}
.list-item {
  display: block;
  margin-top: 0.4vw;
  width: 80vw;
  height: 10vw;
  overflow: hidden;
  border: 3px solid #858ae3;
  border-radius: 35px;
}
.list-item img {
  display: block;
  border-radius: 50%;
  height: 9.5vw;
  width: 9.5vw;
  border: 4px solid #613DC1;
  margin-top: 0%;
  margin-left: 0%;
}
.list-item .content {
    background: #fff;
    display: flex;
}
.list-item .header{
    width: 100%;
    font-family: "Open Sans", sans-serif;
    font-size: 3rem;
    margin-left: 15%;
}
.list-item .body{
    width: 100%;
    font-size: 2rem;
    margin-left: 15%;
}
</style>