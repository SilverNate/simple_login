<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href class="navbar-brand" @click.prevent>Smart Schools System</a>
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            Register
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
           Admin Login
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
              User Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
         <li class="nav-item">
          <router-link to="/data" class="nav-link">
            Data User
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <div class="nav-link">
            <a style="text-decoration:none;color:#919496" href="http://127.0.0.1:8000/chat">Chat Room</a>
          </div>
        </li>
         <li v-if="currentUser.role=='school_admin'" class="nav-item">
          <router-link to="/invite" class="nav-link">
            Invite User
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>

  </div>
</template>

<script>
export default {
  data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
      }
    },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    rows() {
        return this.items.length
      },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>