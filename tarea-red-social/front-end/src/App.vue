<template>
  <div>
    <button class = "BtnOption" @click = "Friends">Friends</button>
    <button class = "BtnOption" @click = "FriendshipRequest">FriendshipRequest</button>
    <button class = "BtnOption"  >Prueba</button>
  </div>
  <Friend-card></Friend-card>
  
</template>

<script>
import FriendCard from './components/FriendCard.vue'
export default {
  name: 'App',
  components: {
    FriendCard
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
