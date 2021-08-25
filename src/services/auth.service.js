import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'auth/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  loginuser(user) {
    return axios
      .post(API_URL + 'auth/loginUser', {
        school_id: user.school_id,
        password: user.password,
        username: user.username
      })
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
    }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'auth/registerAdmin', {
      school_name: user.school_name,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
