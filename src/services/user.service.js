import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://127.0.0.1:8000/api/';

class UserService {
  getPublicContent($params) {
    return axios.get(API_URL + 'view', { headers: authHeader() , $params});
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'view', { headers: authHeader() });
  }
  deleteData(){
    return axios.delete(API_URL + 'delete', {headers : authHeader() });
  }
}

export default new UserService();
