<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Register</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cumpleaños</th>
          <th>Correo</th>
          <th>Biografia</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.usuario_email">
          <td>{{ item.usuario_nombre }}</td>
          <td>{{ item.usuario_nacimiento }}</td>
          <td>{{ item.usuario_email }}</td>
          <td>{{ item.usuario_biografia }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { email: item.usuario_email } }"
              class="button is-info is-small">Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteUsuario(item.usuario_email)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axios
const axios = require('axios'); 
 
export default {
  name: "showProfile",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getUsers();
  },
 
  methods: {
    // Get All Products
    async getUsers() {
      try {
        const response = await axios.get("http://localhost:3000/usuarios");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Product
    async deleteUsuario(email) {
      try {
        await axios.delete(`http://localhost:3000/usuarios/${email}`);
        this.getUsers();
      } catch (err) {
        console.log(err);
      }
    },
  }
};
</script>
