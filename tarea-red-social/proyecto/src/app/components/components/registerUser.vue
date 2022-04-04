<template>
  <div>
    <div class="field">
      <label class="label">Nombre</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Nombre"
          v-model="usuarioNombre"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Fecha de Nacimiento</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="YYYY-MM--DD"
          v-model="usuarioNacimiento"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Correo</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Correo"
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

    <div class="field">
      <label class="label">Biografia</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Biografia"
          v-model="usuarioBiografia"
        />
      </div>
    </div>
 
    <div class="control">
      <button class="button is-success" @click="Registrar">registrar</button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";
 
export default {
  name: "registerUser",
  data() {
    return {
      usuarioNombre: "",
      usuarioNacimiento: "",
      usuarioCorreo: "",
      usuarioContrasena: "",
      usuarioBiografia: ""

    };
  },
  methods: {
    // Create New product
    async Registrar() {
      try {
        await axios.post("http://localhost:3000/usuarios", {
          usuario_nombre: this.usuarioNombre,
          usuario_nacimiento: this.usuarioNacimiento,
          usuario_email: this.usuarioCorreo,
          usuario_contrasena: this.usuarioContrasena,
          usuario_biografia: this.usuarioBiografia
        });
        this.usuarioNombre = "";
        this.usuarioNacimiento = "";
        this.usuarioCorreo = "";
        this.usuarioContrasena = "";
        
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>