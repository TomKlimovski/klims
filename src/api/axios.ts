import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://feature-search-results--epicarc.netlify.app/api/',
});
