<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <div style="display: inline-block;" v-show="!getUser">
                |
                <router-link to="/login">Login</router-link>
            </div>
            <div style="display: inline-block;" v-show="getUser">
                |
                <router-link to="/users">Users List</router-link>
                |
                <a href="#" @click="logoutUser">Logout</a>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapGetters('auth', ['getUser'])
    },
    mounted () {
      this.loadUser()
    },
    methods: {
      ...mapActions('auth', ['logout', 'loadUser']),
      logoutUser () {
        this.logout()
        this.$router.push('/')
      }
    }
  }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
