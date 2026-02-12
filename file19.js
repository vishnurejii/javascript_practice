
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
//if we want to store the data
const cart=products.map((product) => {

    const obj={
        ...product,
        quantity:1,
      
    };
   return obj
});

console.log(cart);

//When you use map(), you are telling JavaScript: “Take this array and give me a new modified array.” 
// The main advantage of map() is that it automatically creates and returns a new array based on the transformation
//  you apply. In your case, you are taking the products array and creating a new cart array by adding a quantity 
// property to each product. This makes map() very clean and readable because you don’t need to create an empty 
// array or manually push items into it. It is specifically designed for transforming data.

// On the other hand, forEach() is mainly used for performing actions (side effects) on each element, such as logging 
// values, updating something externally, or calling an API. It does not return a new array. If you want to build a 
// new array using forEach(), you must first create an empty array and then manually push elements into it. 
// This makes the code slightly longer and increases the chance of mistakes, especially for beginners.

// Another important advantage of map() is that it follows a functional programming style. It avoids unnecessary 
// mutations and keeps your code more predictable. This is very useful in frameworks like React, where immutability 
// and clean state updates are important. With map(), your original products array remains unchanged, and you clearly 
// express your intention of transforming data.

// In summary, use map() when you want to create a new array by modifying or transforming existing data. Use forEach() 
// when you only need to perform an action for each element without creating a new array. In your cart example, map() 
// is the more professional and appropriate choice because you are generating a new array from the original products 
// array.