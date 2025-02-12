// function main(number) {
//   if (number < 1) {
//     return alert("this is wrong number");
//   }
//   for (let i = 0; i <= number; i++) {
//     console.log(i);
//   }
//   for (let i = number; i >= 0; i--) {
//     console.log(i);
//   }
// }
// let pera = 10;
// main(pera);

function result(num) {
  if (num < 1) {
    return alert("this is wrong number");
  }
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}

result(30);
