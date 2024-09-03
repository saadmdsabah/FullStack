//suppose we have an array of products in a shopping cart each object represents a product with a name and a price. we want to apply 10% discount to all products

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

const applyDiscount = userCart.forEach((cart)=>{
    cart.cart.forEach((items) => {
        items.price = items.price - (items.price)/10
    })
})

