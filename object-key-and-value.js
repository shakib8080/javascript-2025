//  find object key

const computure = {
  brand: "lenova",
  price: 1200,
  processor: "intel",
  hdd: "512gb",
};

const keys = Object.keys(computure);
console.log(keys);

// find object value

const college = {
  name: "dania university",
  class: ["11, 12, 13,"],
  result: "gpa-5",
  students: 2000,
};

const value = Object.values(college);
console.log(value);

// and delete object property
delete college.class;
console.log(college);
