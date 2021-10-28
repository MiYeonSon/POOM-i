import axios from "axios";

const client = axios.create();


//const url = 'http://192.168.10.233:8081/api/';
//const url = 'http://poom-i.kro.kr:8081/api/';
//const url = 'http://34.81.61.226:8081/api/';
const url = 'http://www.poomi.space:8080/api';


client.defaults.baseURL = url;
client.defaults.withCredentials = true;

export default client;