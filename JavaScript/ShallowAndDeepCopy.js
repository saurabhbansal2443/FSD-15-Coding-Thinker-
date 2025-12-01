let obj = {
  name: "Saurabh",
  age: 24,
  address: {
    city: "Delhi",
    pincode: 110085,
  },
};

// let copyObj = obj; // Shallow Copy 

let copyObj = JSON.parse(JSON.stringify(obj));

copyObj.name = "Aman";

console.log(obj);
console.log(copyObj);
