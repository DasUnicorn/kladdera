import axios from "axios";

axios.defaults.baseURL = "https://kladdera-9fa58a88bfbf.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;