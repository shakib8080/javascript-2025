const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let reva = number.reverse();
// console.log(reva);

// let reva_num = [];

// for (let rev of number) {
//   console.log(rev);
//   reva_num.unshift(rev);
// }
// console.log(reva_num);

for (let i = number.length - 1; i >= 0; i--) {
  const initial = number[i];
  console.log(initial);
}
