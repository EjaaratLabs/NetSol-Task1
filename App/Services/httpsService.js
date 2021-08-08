import axios from 'axios';
const client = axios.create({
    baseURL: 'https://',
    responseType: 'json'
  });
export default client;
// It is good practice to use axios like this in singleton but as in our senerio have to go
//through multiple baseUrls so didn't used it.