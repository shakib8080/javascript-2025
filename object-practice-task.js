// //  task 2
// let car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020,
// };
// car.passenger = "5";
// console.log(car);

// // task 3

// const student = {
//   name: "Hamim Sakep",
//   id: 5421,
//   physics: {
//     subject: "HSC Physics",
//     author: "Shahjahan Tapan",
//     marks: 30,
//   },
// };
// console.log(student.physics.marks);

// task 4

// let student = {
//   name: "Ariana Grande",
//   age: 21,
//   city: "Gaibandha",
//   isStudent: true,
// };

// const count = Object.keys(student).length;
// console.log(count);

// task 5

// let myObject = {
//   name: "John Doe",
//   age: 25,
//   city: "Example City",
//   isStudent: true,
// };

// let value = Object.values(myObject);
// console.log(value);
// for (let tispe of value) {
//   console.log(typeof tispe);
// }

// let key = Object.keys(myObject);
// for (let first of key) {
//   console.log("key:", first);
// }

// let mess = one.join(first);
// console.log(mess);

const obj = {
  name: "Alice",
  age: 25,
  isStudent: false,
  scores: [90, 85, 88],
  details: { city: "New York", country: "USA" },
};

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`Key: ${key} | Type: ${typeof obj[key]}`);
  }
}
