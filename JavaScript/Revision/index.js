// console.log(a);
// var a = 10;
// console.log(a);

// first();

// function first() {
//   function second() {
//     function three() {
//       console.log(a);
//     }

//     three();
//   }
//   second();
// }
// Var is function scoped and let and const are block
// as well as function scope(because function is also a block ) scoped

// let a = 10;
// function test() {
//   let a = 100;
//   console.log(a);
// }
// test();
// console.log(a);

// var a = 10;
// console.log(a);
// {
//   var a = 100;
//   console.log(a);
// }
// console.log(a);

// let a  ;
// console.log(a);

// 1)Given an array of strings, return a new array with the length of each string
// 2)Given an array of strings, return a new array with the first letter of each
//  string capitalized and the rest in lowercase
// 3)Given an array of numbers, return the average of all the numbers
// 4)Calculate the sum of even number in this array

// const data = [1, 2, 3, 4, 5, 6, 7];
//["Dom", "JavaScript", "HTML", "CSS"];

// const lengths = data.map(function (ele) {
//   return ele.length;
// });
// const ans = data.map(function (str) {
//   let fch = str.charAt(0).toUpperCase();
//   let remStr = str.slice(1, str.length).toLowerCase();
//   return fch + remStr;
// });
// const ans = data.reduce(function(acc,ele){
//     return acc + ele
// })/data.length
// const ans = data
//   .filter(function (ele) {
//     return ele % 2 == 0 ;
//   })
//   .reduce(function (acc, ele) {
//     return acc + ele;
//   });
// console.log(ans);

// Implement ArrayList using closures
// Addfirst , addLast , addAtIndex , Size , print , deleteFirst , deleteLast , deleteAtIndex

function ArrayList() {
  let arr = [];
  function getElement(idx) {
    return arr[idx];
  }
  function addFirst(ele) {
    arr.unshift(ele);
  }

  function addLast(ele) {
    arr.push(ele);
  }
  function addatIndex(ele, idx) {
    arr.splice(idx, 0, ele);
  }
  function size() {
    return arr.length;
  }
  function print() {
    console.log(arr);
  }
  function deleteFirst() {
    arr.shift();
  }
  function deleteLast() {
    arr.pop();
  }
  function deleteAtIndex(idx) {
    arr.splice(idx, 1);
  }
  return {
    getElement,
    addFirst,
    addLast,
    addatIndex,
    size,
    print,
    deleteFirst,
    deleteLast,
    deleteAtIndex,
  };
}
const list = ArrayList();
list.addFirst(10);
list.addLast(100);
list.addatIndex(99, 1);
list.deleteFirst()
list.deleteLast()
list.deleteAtIndex(0)
console.log(list.size());
list.print();
