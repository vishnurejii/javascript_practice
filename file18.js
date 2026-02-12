//const product=["product1","product2","product3"]

const products = [
  {
    _id: 1,
    name: "iphone",
    des: "Apple iPhone with high-performance processor",
    price: 67000
  },
  {
    _id: 2,
    name: "tv",
    des: "Smart LED TV with Full HD display",
    price: "10000"
  },
  {
    _id: 3,
    name: "ac",
    des: "Energy-efficient air conditioner with fast cooling,",
    price: "25000"
  }
];

let cart=[]

products.forEach((product) => {
    // product.quantity=1
    // product.total=(product.price)*(product.quantity)
    // cart.push(product)
    

    const obj={
        ...product,
        quantity:1,
      
    };
    cart=[...cart,obj]
});

console.log(cart);
//each element will be object
// products.forEach((product)=> console.log(product));




