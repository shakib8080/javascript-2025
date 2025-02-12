// jodi kw 5000 takar besi / tar soman
//  buy kore tahole tar jonno 10 % discount

const buy = 5000;
if (buy >= 5000) {
  const discount = (buy * 10) / 100;
  console.log(discount);
  const pleasePay = buy - discount;
  console.log(pleasePay);
} else {
  console.log(buy);
}
