const users = [
  {
    id: 1,
    isActive: false,
    name: "Saad",
  },
  {
    id: 2,
    isActive: true,
    name: "Sabahuddin",
  },
  {
    id: 3,
    isActive: true,
    name: "Hamzah",
  },
  {
    id: 4,
    isActive: false,
    name: "Abraar",
  },
];

//Remove inactive users

const indexToRemove = []
const addIndex = users.forEach((user) => {
    if(user.isActive === false){
        indexToRemove.push(user.id);
    }
});
console.log(indexToRemove);
console.log(users);

if(indexToRemove.length > 0){
    users.splice(indexToRemove, indexToRemove.length);
}
console.log(users);

