const {default: axios} = require('axios');

const axiosClient = axios.create({
    baseURL : 'http://localhost:1337/api',
});

const getMenuCategory = () => axiosClient.get('/categories?populate=*');
const getProductList = () => axiosClient.get('/products?populate=*');


const getProductByCategory=(category)=>axiosClient.get('/products??filters[categories][name][$in]='+category+"&populate=*")
.then(resp=>{
    return resp.data.data;
})

export default { getMenuCategory, getProductList,getProductByCategory};

