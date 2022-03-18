<template>
  <div class="Register">
    <h1>This is the register page</h1>
    <Register_Component></Register_Component> 
  </div>
</template>



<script>
// @ is an alias to /src
import Register_Component from '@/components/Register_Component.vue'

export default {
  name: 'Register_View',
  components: {
    Register_Component
}
}
</script>
