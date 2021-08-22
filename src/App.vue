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
        <!-- <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            Profile
            {{ currentUser.username }}
          </router-link>
        </li> -->
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
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    // showAdminBoard() {
    //   if (this.currentUser && this.currentUser.roles) {
    //     return this.currentUser.roles.includes('school_admin');
    //   }

    //   return false;
    // },
    // showModeratorBoard() {
    //     // console.log('admin', this.currentUser.role)
    //   if (this.currentUser && this.currentUser.roles) {
    //     return this.currentUser.roles.includes('school_admin');
    //   }

    //   return false;
    // }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>