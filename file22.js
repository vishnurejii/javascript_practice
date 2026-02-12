
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
    // if (product) {
    //     cart.push(product);
    // }//we are using if condition to avoid printing undefined for not existing ids
    cart.push({...product,quantity:1})

    //*************** */
    //  if (product) {
    //     const item={
    //         ...product,
    //         quantity:1
    //     }
    //     cart.push(item)
    // }
}
function increment(productId){
    const item=cart.find(product=>product._id===productId)
        item.quantity++
}

function decrement(productId){
    const item=cart.find(product=>product._id===productId)
        if(item){
            item.quantity--
        }
}

function placeOrder(){

    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)

    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    const order = {
        orderDate: new Date(),
        email: "vishnurejii@gmail.com",
        quantity: totalQuantity,
        total: totalAmount
    }

    console.log(`order successfully placed by ${order.email}`)
    cart.forEach(item=>{
    console.log(`-${item.name}--${item.price}`)
    
})
console.log(`quantity is: ${order.quantity}`)
console.log(`total is : ${order.total}`)
    console.log(order)
}



  //orderID,orderDate,orderValue,quantity

addTocart(1)
addTocart(3)
addTocart(5)

console.log("*************flipkart*********")
products.forEach(product=>{
    console.log(`${product.name},${product.des},${product.price}`)
})


console.log("\n")
console.log("**********cart*********")
console.log("\n")
cart.forEach(item=>{
    console.log(`-${item.name}-${item.des}-${item.price}`)
})
console.log("\n")
increment(1)
decrement(3)
// console.log(cart)

console.log("\n")
console.log("***********order details************")

console.log(`order placed successfully `)
console.log("\n")
placeOrder(1)
console.log(cart)
