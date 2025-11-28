// Var vs Let vs Const

// reintialization -> Var can be reinstialized but let and connot  cannot be

// Value declartion and change -> var and let can be changed const cannot be
// Note-> when intializing the const variable we have to give the value

// Var can be access before it has been decalred let , const  cannot be accesssed before intilaization

// Hoisting - variable and function are moved to top of the scope prior to execution
// A variable and a function can be accesed before it has been declared

// Var let and const are hoisted but let and const are stored in TDZ

// console.log(a);
// var a = 10;
// console.log(a);

// first();

// function first() {
//   console.log(a);
//   function second() {
//     console.log(b);
//     var b = 99;
//     console.log(b);
//     console.log(a);
//     function three() {
//       console.log(b);
//       console.log(a);
//       var b = 99;
//       console.log(b);
//       console.log(a);
//     }
//     console.log(a);
//     three();
//     console.log(b);
//   }
//   second();
//   console.log(b);
// }

// Global Scope - anything which is not in a function is called global scope

// Var is function scope and let and const are block {} scope\

// var let and const are function scoped beacuse function is also a block

// let a = 10;

// function abc() {
//   let a = 100;
//   console.log(a);
// }

// abc();

// console.log(a);

// let a = 10;
// console.log(a);

// {
//   // console.log(a);
//   let a = 100;
//   console.log(a);
// }

// console.log(a);

// console.log(a);

let a;

console.log(a);
