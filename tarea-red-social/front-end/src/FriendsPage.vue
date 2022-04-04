<template v-if = "opcion === 0">
  <div>
    <button class = "BtnOption" @click = "opcion = 0">Friends</button>
    <button class = "BtnOption" @click = "opcion = 1">FriendshipRequest</button>
    <button class = "BtnOption"  >Prueba</button>
  </div>
  <ul v-if="opcion === 0">
    <Friend-card></Friend-card>
  </ul>
  <ul v-else-if="opcion === 1">
    <Friendship-request></Friendship-request>
  </ul>
    

</template>

<script>
import FriendCard from './components/FriendCard.vue'
import FriendshipRequest from './components/FriendshipRequest.vue'

export default {
  name: 'Friends',
  data(){
    return{
      opcion:2,
    }
  },
  components: {
    FriendCard,
    FriendshipRequest,
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
