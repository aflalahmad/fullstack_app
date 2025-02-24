import { Item } from '@radix-ui/react-dropdown-menu';

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

const addToCart=(data,jwt)=>axiosClient.post('/user-carts',data,{
    headers:{
        Authorization:'Bearer '+jwt
    }
});

// const getCartItems=(userId,jwt)=>axiosClient.get('user-carts?filters[userId][$eq]='+userId+'&populate=*',{
//     headers:{
//         Authorization:'Bearer '+jwt
//     }
// }).then(resp=>{
//     const data=resp.data.data;
//     const cardItemList=data.map((Item,index)=>({
//         name:item.attributes.products?.data[0].attributes.name,
//         quantity:item.attributes.quantity,
//         amount:item.attributes.amount,
//         image:item.attributes.products?.data[0].attributes.images.data[0].attributes.url,
//         actualPrice:item.attributes.products?.data[0].attributes.mrp,
//         id:item.id
   //        products:item.attributes.products?.data[0].id


//     })
// )
//     return resp.data.data
// });

const getCartItems=(userId,jwt)=>axiosClient.get('user-carts?filters[userId][$eq]='+userId+'&populate=*',{
    headers:{
        Authorization:'Bearer '+jwt
    }
}).then(resp=>{
    return resp.data.data
})

const deleteCartItem=(id,jwt)=>axiosClient.delete('/user-carts/'+id,
    {
        headers:{
            Authorization:'Bearer '+jwt
        }
    })

const createOrder=(data,jwt)=>axiosClient.post('/order',data,{
    headers:{
        Authorization:'Bearer '+jwt
    }
});

const getMyOrder=(userId,jwt)=>axiosClient.get('/orders?filters[userId][$eq]=6&populate[orderItemList][populate][product][populate][images]=url')
.then(resp=>{
    const response=resp.data.data;
    const orderList=response.map(item=>({
        id:item.id,
        totalOrderAmount:item.attributes.totalOrderAmount,
        paymentId:item.attributes.paymentId,
        orderItemList:item.attributes.orderItemList

    }));
    return orderList;
})



export default { getMenuCategory, getProductList,getProductByCategory,registerUser,
    SignIn,addToCart,getCartItems,deleteCartItem,createOrder,
    getMyOrder
};

