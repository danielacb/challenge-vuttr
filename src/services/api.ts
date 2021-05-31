import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://danielacb-vuttr.herokuapp.com/',
});
