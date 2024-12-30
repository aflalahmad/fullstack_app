const {default: axios} = require('axios');

const axiosClient = axios.create({
    baseURL : 'http://localhost:1337/api',
});

const getMenuCategory = () => axiosClient.get('/categories?populate=*');

export default { getMenuCategory};