import axios from "axios";

const instance = axios.create({
  baseURL: "https://novelistgroup.com/api/v1",
});
instance.defaults.withCredentials = true;

export default instance;
