import axios from 'axios';

const API = axios.create({
  baseURL: '/api/auth',
});

export const signupUser  = (data)  => API.post('/signup', data);
export const signinUser  = (data)  => API.post('/signin', data);

export default API;
