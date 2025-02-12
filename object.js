// Object in js

const phone = {
  amrBrand: "nokia",
  model: "11",
  price: 1200,
  battary: "1220 mpr",
  another: {
    name: "shakib",
    price: 120,
    height: 5.6,
  },
  "anot her2": ["shakib", "rakib", "ashik "],
};
// console.log(phone);
// console.log(phone);

// object property change

// console.log(phone);
// phone.brand = "iphone";
// console.log(phone);
// console.log(phone);
// phone.another2[2] = "lasem";
// console.log(phone);

// phone["brand"] = "sampony";
// console.log(phone);
console.log(phone["anot her2"]);
let antotherPhone = "ipad ";
phone.amrBrand = antotherPhone;
console.log(phone);
