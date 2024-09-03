//suppose you are working on an e-commerce website, and you need to calculate the total price of the item in a user's shopping cart
//1)each item is represented as an object in an array with properties such as "Name", "Price", "Quantity".
//2)Your task is to calculate the total cost of items in the cart
//3)also list all the items in the cart for the user's review


const userCart = [
  {
    id: 1,
    cart: [
      { name: "Ball", price: 45, quantity: 1 },
      { name: "Bat", price: 1000, quantity: 2 },
      { name: "gloves", price: 300, quantity: 1 },
      { name: "wickets", price: 200, quantity: 2 },
    ],
  },
  {
    id: 2,
    cart: [
      { name: "football", price: 45, quantity: 1 },
      { name: "shinpad", price: 1000, quantity: 2 },
      { name: "gloves", price: 300, quantity: 1 },
    ],
  },
];

const returnTotal = (id) => {
    const obj = userCart.find((user)=>user.id === id);
    let sum = obj.cart.reduce(function(acc, items){
        return acc + items.price * items.quantity;
    }, 0);
    return sum;
}

const returnCart = (id) => {
    const obj = userCart.find((user)=>user.id === id);
    obj.cart.forEach(({name, price, quantity}, index, arr) => {
        console.log(`Name of the Item ${name}, price ${price}, quantity ${quantity}`);
    })
} 
const user1 = returnTotal(1);
console.log(user1);
returnCart(1)