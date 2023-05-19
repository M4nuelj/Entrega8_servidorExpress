const express=require("express");
const app=express();
const port=8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const productRoute=require('./routes/products.route');
app.use('/api/products', productRoute);

const cartsRoute=require('./routes/carts.route');
app.use('/api/carts', cartsRoute);

app.listen(port,()=>{
    console.log(`Server runing in the PORT http://localhost:${port}`);
})