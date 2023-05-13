const express=require("express");
const app=express();
const port=8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const productRoute=require('./routes/products.route.js');
app.use('/api/carts', productRoute);

const cartsRoute=require('./routes/carts.route.js');
app.use('/api/products', cartsRoute);

app.listen(port,()=>{
    console.log(`Server runing in the PORT http://localhost:${port}`);
})