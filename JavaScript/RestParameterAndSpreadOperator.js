// function sum(a, b, c) {
//   return a + b + c;
// }

// sum(1,2,3,4,5,6,7,8,8); 

// // Rest Paramterre
// function sum(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// }

// Spread Operator

let a = [1, 2, 34, 5];
let b = ["a", "b", "c"];

// let c = [...a, ...b];

let aCopy = [...a];

console.log(aCopy);

let obj2 = {
  place: "hdjkhwkdh",
};

let obj = {
  name: "Saurabh",
  age: 24,
  address: {
    city: "Delhi",
    pincode: 110085,
  },
};

let c = { ...obj }; //it is a combination of deep and shallow copy

c.address.city = "Bhopal";
console.log(obj);
console.log(c);

  
