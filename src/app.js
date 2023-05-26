const express=require("express");
const app=express();
const port=8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const viewsRouter= require( './routes/views-router.js');
const { __dirname, __filename } = require('./utils.js') ;
const handlebars = require('express-handlebars') ;
const http = require('http') ;
const { Server as SocketServer }= require('socket.io') ;//Modificar esta parte del server as socketServer 
const io = new SocketServer(httpServer);

const productRoute=require('./routes/products.route');
app.use('/api/products', productRoute);

const cartsRoute=require('./routes/carts.route');
app.use('/api/carts', cartsRoute);

app.listen(port,()=>{
    console.log(`Server runing in the PORT http://localhost:${port}`);
})