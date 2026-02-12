
const products = [
  {
    _id: 1,
    name: "product1",
    des: "this is the description",
    price: 67000
    ,category:"laptop"
  },
 {
    _id: 2,
    name: "product2",
    des: "this is the description",
    price: 45000,
    category:"desktop"
  },
  {
    _id: 3,
    name: "product3",
    des: "this is the description",
    price:50000,
    category:"iphone"
  },
  {
    _id: 4,
    name: "product4",
    des: "this is the description",
    price:20000,
    category:"projector"
  },
  {
    _id: 5,
    name: "product5",
    des: "this is the description",
    price:25000,
    category:"AC"
  },
  {
    _id: 6,
    name: "product6",
    des: "this is the description",
    price:55000,
    category:"laptop"
  },
];

const cart= []
function addTocart(id){
    const product=products.find((product)=>product._id === id)
    if (product) {
        cart.push(product);
    }
}
addTocart(1)
addTocart(3)
addTocart(5)

console.log(cart)
