import axios from 'axios';

// NOTE: Check if there is a token in local storage, if not set token and send with each request
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;