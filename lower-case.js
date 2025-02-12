// .toLowerCase ( )

let product = "mobaile";
let names = "MobaiLe";

if (product.toLowerCase() == names.toLowerCase()) {
  console.log("this is oky ");
} else {
  console.log("this is not oky");
}

// .trim() AND .lowercase

let ornament = "watch";
let gift = "waTch ";

if (ornament.toLowerCase().trim() == gift.toLowerCase().trim()) {
  console.log("this is oky ");
} else {
  console.log("this is not oky");
}
