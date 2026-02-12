let cart=[]

//click on add to cart button on iphone product
 cart = [...cart,{name:"iphone",price:45000,qty:1}]
// console.log(cart)

//click on add to cart button on speaker product
 cart = [...cart,{name:"speaker",price:1000,qty:1}]
console.log(cart)


const order={
    email:"john@email.com",
    items:cart,
    orderValue:46000,
    status:"pending"
}

db.orders.insertOne(order)

//create flipkart database
//create collection orders>email,items,ordeValue,status,orderDate
//create collection users>name,email,password,role
//insert seed data
//write aggregate query to display all the orders
//placed by a particular user