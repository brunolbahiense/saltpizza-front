import axios from 'axios';

export default axios.create({
    baseURL: 'https://salt-pizza.herokuapp.com/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});