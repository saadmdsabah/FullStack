
// Instructions:
// Setup Your Environment: Create a new JavaScript file (e.g., inventoryManager.js)

// Implement Inventory Functions:
// addItem(name, category, price, quantity): Adds a new item to the inventory.
// updateItem(name, newDetails): Updates an existing item's details in the inventory.
// deleteItem(name): Removes an item from the inventory.
// searchItem(name): Searches for an item by name and returns its details.
// listInventory(): Returns a list of all items in the inventory.

// Follow the Functional Programming Approach: Avoid using classes. Instead, use functions and store the inventory as an array of objects.
// Ensure Code Quality: Write clean, readable, and well-documented code. Use ES6 features where appropriate.
// Review and Refine: After successfully passing all tests, review your code. Look for opportunities to improve efficiency or readability.

let inventory = [];

// Adds a new item to the inventory.
// Parameters: name (string), category (string), price (number), quantity (number)
function addItem(name, category, price, quantity) {
  inventory.push({ name, category, price, quantity });
}

addItem("Milk", "Dairy", 70, 6)
addItem("Bread", "Grains", 50, 1)
addItem("FootBall", "Sports", 700, 1)

console.log(inventory);

// Updates an existing item in the inventory.
// Parameters: name (string), newDetails (object with updated properties)
function updateItem(name, newDetails) {
  const prevObj = inventory.find((items)=>{
    return items.name === name
  })
  Object.assign(prevObj, newDetails)
}

updateItem("Milk", {name:"Milk", category:"Dairy", price:65, quantity:2})
// console.log(inventory);

// Deletes an item from the inventory.
// Parameter: name (string)
function deleteItem(name) {
  const indexToRemove = inventory.findIndex((items)=>{
    return items.name === name
  })
  inventory.splice(indexToRemove, 1);
}
deleteItem("Milk");

// Searches for an item by name and returns it.
// Parameter: name (string)
function searchItem(name) {
  const objToFind = inventory.find(user=>user.name === name);
  return objToFind
}

console.log(searchItem("FootBall"));
console.log();


// Lists all items in the inventory.
function listInventory() {
  inventory.forEach(({name, category, price, quantity}) => console.log(name, category, price, quantity));
}
listInventory()