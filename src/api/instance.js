import axios from "axios";

const baseURL = 'https://baconipsum.com/api/';

const instance = axios.create({
  baseURL,
});

export default instance;
