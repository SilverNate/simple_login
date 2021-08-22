<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <br>
        <br>
        <h4>Invited User</h4>
        <br>
        <!-- prevent form submit untuk reload halaman, kemudian memanggil function addData() -->
        <form @submit.prevent="addData()">
          <div class="form-group">
            <label>Username</label>
            <input
              type="textfield"
              class="form-control"
              placeholder="Input your username"
              v-model="form.username"
              required
            >
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="textfield"
              class="form-control"
              placeholder="Input your email"
              v-model="form.email"
              required
            >
          </div>
        
        <div class="form-group">
        <label>Role</label>
        <select class="form-select" v-model="form.role"
              required aria-label="Roles">
            <option selected>Select Role</option>
            <option value="2">Teacher</option>
            <option value="3">Student</option>
        </select>
        </div>
          <br>
          <button class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import authHeader from '../services/auth-header';

export default {
  data(){
    return{
      form:{
        username: '',
        email: '',
        role: ''
      }
    }
  },
  methods: {
    addData() {
      axios
        .post("http://127.0.0.1:8000/api/auth/registerUser", {
          username: this.form.username,
          email: this.form.email,
          role: this.form.role
        }, { headers: authHeader() }
        )
        .then(response => {
          // push router ke read data
          console.log('invite user', response)
          this.$router.push("/");
        });
    }
  }
};
</script>