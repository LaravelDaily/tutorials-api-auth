<template>
    <div class="about container">
        <table class="table table-striped table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in usersList" v-bind:key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Users',
    data: function () {
      return {
        usersList: []
      }
    },
    mounted () {
      let app = this
      axios.get(process.env.VUE_APP_API_URL + 'users')
        .then(function (resp) {
          app.usersList = resp.data.data
        })
    }
  }
</script>
