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
];

const activeUsers = users.filter((user) => {
    return user.isActive === true;
})
const inactiveUsers = users.filter((user) => {
  return user.isActive === false;
});
console.log(activeUsers);
console.log(inactiveUsers);

