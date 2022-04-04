<template>
  <div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="tuNombre@correo.com"
          v-model="usuarioCorreo"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Contraseña</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Contraseña"
          v-model="usuarioContrasena"
        />
      </div>
    </div>
 
    <div class="control">
      <button class="button is-success" @click="login">Entrar</button>
    </div>
  </div>
</template>
 
 <script>
// import axios
import axios from "axios";
 
export default {
  name: "AddProduct",
  data() {
    return {
      usuarioCorreo: "",
      usuarioContrasena: "",
    };
  },
  methods: {

    // Create New product
    async login() {
      try {
        const response = await axios.get(`http://localhost:3000/usuario/login/${this.usuarioCorreo}`); 

        console.log(response);

        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>