// function counter() {
//   let count = 0;

//   function Increment() {
//     count++;
//     console.log(count);
//   }
//   function Decrement() {
//     count--;
//     console.log(count);
//   }

//   return {
//     Increment,
//     Decrement,
//   };
// }
// //const obj = counter(); // {  Increment, Decrement  }
// const { Increment, Decrement } = counter(); // object destrructing

// Increment();
// Increment();
// count = 10;
// Decrement();

function ArrayList() {
  let arr = [];
  function addElement(ele) {
    arr.push(ele);
  }
  function getElement(idx) {
    return arr[idx];
  }
  function setElement(ele, idx) {
    let rEle = arr[idx];
    arr[idx] = ele;
    return rEle;
  }
  function removeElement(idx) {
    if (idx == 0) {
      let fEle = arr[0];
      arr.shxift();
      return fEle;
    } else if (arr.length - 1 == idx) {
      let lEle = arr[idx];
      arr.pop();
      return lEle;
    } else {
      return arr.splice(idx, 1);
    }
  }
  function size() {
    return arr.length;
  }
  function close() {
    arr = null;
  }
  function print() {
    console.log(arr);
  }

  return {
    addElement,
    getElement,
    size,
    setElement,
    removeElement,
    close,
    print,
  };
}

let list = ArrayList();

list.addElement(12);
list.addElement(14);
list.addElement(17);

list.removeElement(1)



list.print();

let list1 = ArrayList(); 