<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="primary">
    <b-navbar-brand href="#">bookface</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Login</b-nav-item>
        <b-nav-item to="/Register">Register</b-nav-item>
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>
