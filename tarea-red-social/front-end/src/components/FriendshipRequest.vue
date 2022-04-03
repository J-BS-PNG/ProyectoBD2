
<template>
    <ul>
        <li class = 'list-item' v-for="item in list" :key="item.id">
            <div class ="content" >
                <img v-bind:src = "item.img">
                <div class="main">
                    <div class="header">
                        <span class = "Name">{{item.name}}</span>
                    </div>
                    <div class = "body">
                        {{item.text}}
                    </div>
                
                </div>
                <div class="Button_section">
                    <button class="Aceptar">Aceptar</button>
                    <button class="Rechazar">Rechazar</button>
                </div>
            </div>
        </li>
    </ul>

</template>
<script>
export default {
  name: 'FriendshipRequest',
    data(){
        return {
        list:[
            {id:1 , name:"Fulano", text:"friendship", img:"https://freepngimg.com/thumb/toothless/167955-pic-toothless-dragon-png-download-free.png"},
            {id:1 , name:"Mengano", text:"friendship ", img:"https://www.megaidea.net/wp-content/uploads/2020/03/dragon-chimuelo-19.png"},
            {id:1 , name:"Cristiano", text:"friendship ", img:"https://i.pinimg.com/550x/85/f8/62/85f862aa62da01f7321a553bd4a6f81a.jpg"},
            {id:1 , name:"Mengano", text:"friendship ", img:"https://www.megaidea.net/wp-content/uploads/2020/03/dragon-chimuelo-19.png"}
            ],
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

.list-item .Button_section{
    padding: 50px 100px;
}

button {
  padding: 10px 30px;
  background-color: #858ae3;
  color: #000;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  border: 3px solid #613DC1;
  border-radius: 10px;
  margin-right: 2em ;
}
button:hover {
  color: #fff;
}



</style>