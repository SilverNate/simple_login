<template>
  <!-- <div class="container">
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
  </div> -->
  <div>
    <div class="row">
      <div class="col-md-12">
        <br>
        <br>
        <div class="row">
          <div class="col-md-10">
            <h4>Users</h4>
          </div>
          <div class="col-md-2">
            <router-link class="btn btn-primary w-100" v-if="role=='school_admin'" to="/create">+ Add</router-link>
          </div>
        </div>
        <br>
        <table id='my-table' class="table table-hover table-bordered table-responsive-lg">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">School</th>
              <th scope="col">email</th>
              <th scope="col">role</th>
              <th scope="col" v-if="role=='school_admin'">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="content in contents" :key="content.id">
              <td style="width:15%">{{content.username}}</td>
              <td style="width:15%">{{content.school_name}}</td>
              <td style="width:15%">{{content.email}}</td>
              <td style="width:10%">{{content.role}}</td>
              <td style="width:10%" v-if="role=='school_admin'">
                <!-- <router-link class="btn btn-warning" :to="'/detail/'+content.id">Update</router-link> -->
                <button class="btn btn-danger" v-on:click="deleteData(content.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>



  </div>
</template>

<script>
import UserService from '../services/user.service';
import axios from 'axios';
import authHeader from '../services/auth-header';

export default {
  name: 'Home',
  data() {
    return {
      contents: '',
      role:'',
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.contents = response.data.results;
        this.role = this.$store.state.auth.user.role;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );

  },
  methods: {
    deleteData(id) {
      axios.post("http://127.0.0.1:8000/api/delete", { id: id}, { headers: authHeader() }).then(response => {
        if(response.data.status.code == 200){
            window.location.reload();
        }
      });
    },
  },
};
</script>