// let num = 0;
// let sum = 1;
// while (num < 10) {
//   num++;
//   console.log(num);
//   sum = sum * num;
//   console.log("this is sum", sum);
// }

let names = [
  { id: " nokia", price: 100, model: 20021 },
  { id: "samsung", price: 1000, model: 20021 },
  { id: "vivo", price: 20000, model: 20021 },
  { id: "iphone", price: 20000, model: 20021 },
];

// for (let i = 0; i < names.length; i++) {
//   let name = names[i];
//   console.log(name);
// }

function findMyChoice(items, search) {
  let mychoice = [];
  for (let choice of names) {
    if (choice.id.toLowerCase().includes(search.toLowerCase())) {
      mychoice.push(choice);
    }
  }
  if (mychoice.length) {
    return mychoice;
  } else {
    return "data not found";
  }
}
let result = findMyChoice(names, "iphone");
console.log(result);
