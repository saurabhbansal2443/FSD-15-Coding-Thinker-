// number , boolean , string , undefined , null , symbol , // Object -- Array , Object

// let a = 10;
// let name = "saurabh"; //"Saurabh"

// let x = Symbol();

// console.log(x);

// Arithemtic Operator +, - , * , /,  %
// Comparision Operator < , > , <= , >= , == , != , ===
// Logical Operator && , ||
// Assignment Operator += , -= , *= ,/= , %=
// Unary Operator ++ , --

// Diffrence between == vs ===

// let a = 1
// let b = '1'

// console.log(a==b)
// console.log(a===b)

// Write a program to check whether the triangle is equilateral, isosceles or scalene triangle

// let a = 10;
// let b = 20;
// let c = 30;

// if (a == b && a == c) {
//   console.log("Equilateral");
// } else if (a == b || a == c || b == c) {
//   console.log("Iso");
// } else {
//   console.log("Scalene");
// }

// Loop

let a = 10;

// for (let i = 1; i <= a; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= a) {
//   console.log(i);
//   i++;
// }

// function factorial(a) {
//   let fact = 1;

//   for (let i = 1; i <= a; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }

// let ans = factorial;
// console.log(ans(5));

let obj = {
  name: "Saurabh",
  age: 24,
  gender: "male",
  percetage: 93.5,
  address: {
    city: "Delhi",
    HouseNumber: 27,
    pincode: 110085,
  },
  isWell: true,
  hoobies: ["Music", 1, 7, true, [true], { a: "b" }],
};
console.log(obj.hoobies[2]);
