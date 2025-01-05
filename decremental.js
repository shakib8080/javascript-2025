/* // incremental loop

for (let i = 1; i < 20; i++) {
  console.log(i);
}

// decremental loop
let sum = 0;
for (let n = 11; n >= 0; n--) {
  console.log(n);
} */

//   reverce even number

for (let i = 20; i >= 0; i--) {
  console.log(i);
  if (i % 2 === 0) {
    console.log(i, "this is even");
  }
}

// reverce  odd number

for (let i = 10; i >= 0; i--) {
  if (i % 2 !== 0) {
    console.log(i, "this is odd");
  }
}
