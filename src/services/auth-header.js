export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
  console.log('token', user.access_token)
    if (user && user.access_token) {
      return { Authorization: 'Bearer ' + user.access_token };
    } else {
      return {};
    }
  }
  