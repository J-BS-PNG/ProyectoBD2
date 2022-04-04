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
      <label class="label">Bio</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Cuentanos sobre ti!"
          v-model="usuarioBiografia"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateCuenta">ACTUALIZAR</button>
    </div>
  </div>
  <router-link :to="{ name: 'Account' }" class="button is-success mt-5">Back</router-link>
</template>
 
 <script>
// import axios
import axios from "axios";

export default {
  name: "EditCuenta",
  data() {
    return {
      usuarioNombre: "",
      usuarioBiografia: "",
    };
  },
  created: function () {
    this.getUsuarioByEmail();
  },
  methods: {
    goBack(email){
      this.$router.push('/Account')
      
    },
    // Get Product By Id
    async getUsuarioByEmail() {
      try {
        const response = await axios.get(
          `http://localhost:3000/usuarios/especifico/${this.$route.params.email}`
        );
        console.log(response);
        this.usuarioNombre = response.data[0].usuario_nombre;
        this.usuarioBiografia = response.data[0].usuario_biografia;
        console.log(response.data.usuario_nombre);
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update product
    async updateCuenta() {
      try {
        await axios.put(
          `http://localhost:3000/usuarios/${this.$route.params.email}`,
          {
            usuario_nombre: this.usuarioNombre,
            usuario_biografia: this.usuarioBiografia,
          }
        );
        this.usuarioNombre = "";
        this.usuarioBiografia = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 