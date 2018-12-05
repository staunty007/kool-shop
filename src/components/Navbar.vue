<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
      <router-link class="navbar-brand" to="/">
      <img src="../assets/trolley.png" alt="" height="30" width="30">
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="!isAuth">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item" v-if="!isAuth">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <router-link class="nav-link" to="/admin/products/create">Create Product</router-link>
          </li>
          <li class="nav-item dropdown" v-if="isAuth">
            <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Hey {{ isAuth }}
            </a>
              
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" @click="logout()">Logout</a>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </nav>
</template>

<script>
  export default {
    mounted() {
      //console.log(this.$root);
    },
    computed: {
      isAuth() {
        return this.$root.auth.name;
      }
    },
    methods:{
      logout() {
        localStorage.removeItem("auth");
        this.$root.auth = {};
        this.$router.push('/');
        this.$noty.success("Logged Out")
      }
    }
  }
</script>