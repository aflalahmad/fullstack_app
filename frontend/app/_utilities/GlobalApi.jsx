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

const registerUser=(username,email,password)=>axiosClient.post('/auth/local/register',{
    username:username,
    email:email,
    password:password
});

const SignIn=(email,password)=>axiosClient.post('/auth/local',{
    identifier:email,
    password:password
})


export default { getMenuCategory, getProductList,getProductByCategory,registerUser,SignIn};

