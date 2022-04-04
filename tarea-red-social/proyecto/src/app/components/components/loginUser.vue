<template>
  <div>
  <user-logged :email = "usuarioCorreo"></user-logged>
  </div>
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

    <router-link :to="{ name: 'Create' }" class="button is-success mt-5">Register</router-link>
</template>
 
 <script>
// import axios
import axios from "axios";
import showProfileVue from "./showProfile.vue";
//import correo from "./components/userInfo.js";
const correo = require('../../app/components/userInfo.js');

export default {
  name: "loginUser",

  components:{
    showProfileVue
  },
  data() {
    return {
      usuarioCorreo: "",
      usuarioContrasena: "",
    };
  },
  methods: {

    shareCorreo(){
       this.$emit("EmitCorreo". this.usuarioCorreo);
    },

    enterAccount(){
      this.$router.push('/Account')
      
    },
    // Get Product By Id
    async login() {
      try {
      
        const response = await axios.get(
          `http://localhost:3000/usuarios/contrasena/${this.usuarioCorreo}`
        );
        console.log(response);
        if(this.usuarioContrasena == response.data[0].usuario_contrasena){
          console.log("si");
          correo.correo = this.usuarioCorreo;
          this.enterAccount();
        } else {console.log("Contraseña o correo incorrecto")
        //sad
        
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};

</script>
 
<style>
</style>