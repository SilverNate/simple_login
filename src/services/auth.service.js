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
        console.log('token', response.data)
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
    console.log('masuk auth service')
    return axios.post(API_URL + 'auth/registerAdmin', {
      school_name: user.school_name,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
