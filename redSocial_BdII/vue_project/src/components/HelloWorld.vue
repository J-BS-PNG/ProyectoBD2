<template>
  <div class="hello">
    <h1> This is the Login page </h1>
    <div class="w-50 p-3 mb-1">
    <b-form-input v-model="pemail" placeholder="Enter email"></b-form-input>
    <div class="mt-2">Email: {{ text }}</div>

    <b-form-input v-model="ppassword" placeholder="Enter Password"></b-form-input>
    <div class="mt-2">Password: {{ ptext }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      text: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #4dc48e;
}
</style>
