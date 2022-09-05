import axios from 'axios';

export default axios.create({
    baseURL: 'https://salt-pizza.herokuapp.com/',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});