import axios from "axios";

const client = axios.create();
client.defaults.baseURL = 'http://poom-i.kro.kr:8081/api/';

export default client;