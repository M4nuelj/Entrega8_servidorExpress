const fs = require('fs');
const {v4:uuidv4}=require('uuid');

class CartManager{
    constructor(){
        this.carts=[];
    }

    async loadCart(){
        try{
            await fs.promises.writeFile("../carts.json", JSON.stringify({carts:this.carts}));

        }catch(err){
            throw new Error("The new file did not go through")

        }
    }
    async addCart(){
        const postCart={id: uuidv4(), products:[]};
        this.carts.push(postCart);
        await this.loadCart();
        return postCart;


    }
    async getCart(Cid){
        try{
            const cartId= await this.carts.find((cart)=>cart.id===Cid);
            return cartId;
            
        }catch(err){
            throw new Error("The cart id was not found")
        }

    }

    async addProducts(Cid,productId, quantity){

        const getCarts= await this.getCart(Cid);
        const productsId= getCarts.products.findIndex(p=>p.product===productId);
        if(productsId===-1){
            getCarts.products.push({product:productId, quantity:1})
        }else{
            getCarts.products[productsId].quantity+=quantity;
        }
        await this.loadCart();
        return getCarts;


    }

}

module.exports=CartManager;