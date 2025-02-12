// find Object in for loop stander

const computure = {
  brand: "dell",
  price: 2939,
  ram: "393gb",
  room: "939gb",
};
for (let item in computure) {
  console.log(item);
  console.log(computure[item]);
}

// find Object in for loop bangla system

const result = Object.keys(computure);
for (let key of result) {
  console.log(key);
  console.log(computure[key]);
}
