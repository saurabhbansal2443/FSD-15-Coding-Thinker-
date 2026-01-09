// For Each , MAP , filter , reduce

// let arr = [1, 2, 3, 4, 5, 6];

// function print(ele, index, arr) {
//   console.log(ele, index);
// }

// function double(ele, index, arr) {
//   arr[index] = ele * 2;
// }

// console.log(arr.forEach(double));

// console.log(arr);

// MAP

// let arr = [1, 2, 3, 4, 5, 6];

// let ans = arr.map(function (ele, index, arr) {
//   // return ele * 2;
//   if (ele % 2 == 0) {
//     return ele - 1;
//   }
//   return ele;
// });

// console.log(ans);

// FILTER Function

// let ans = arr.filter(function (ele, idx, ref) {
//   return ele % 2 == 0;
// });

// console.log(ans);

// let menuArr = [
//   {
//     item_id: "res_001_m01",
//     name: "Italian Signature Plate",
//     price: 35.18,
//     description:
//       "A delicious Italian Signature Plate made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m01/400/300",
//   },
//   {
//     item_id: "res_001_m02",
//     name: "Italian Chef's Special",
//     price: 19.31,
//     description:
//       "A delicious Italian Chef's Special made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m02/400/300",
//   },
//   {
//     item_id: "res_001_m03",
//     name: "Italian Classic Dish",
//     price: 39.19,
//     description:
//       "A delicious Italian Classic Dish made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m03/400/300",
//   },
//   {
//     item_id: "res_001_m04",
//     name: "Italian House Favorite",
//     price: 36.05,
//     description:
//       "A delicious Italian House Favorite made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m04/400/300",
//   },
//   {
//     item_id: "res_001_m05",
//     name: "Italian Spicy Surprise",
//     price: 8.77,
//     description:
//       "A delicious Italian Spicy Surprise made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m05/400/300",
//   },
//   {
//     item_id: "res_001_m06",
//     name: "Italian Garden Fresh Salad",
//     price: 39.39,
//     description:
//       "A delicious Italian Garden Fresh Salad made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m06/400/300",
//   },
//   {
//     item_id: "res_001_m07",
//     name: "Italian Creamy Soup",
//     price: 30.12,
//     description:
//       "A delicious Italian Creamy Soup made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m07/400/300",
//   },
//   {
//     item_id: "res_001_m08",
//     name: "Italian Crispy Appetizer",
//     price: 29.02,
//     description:
//       "A delicious Italian Crispy Appetizer made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m08/400/300",
//   },
//   {
//     item_id: "res_001_m09",
//     name: "Italian Gourmet Burger",
//     price: 23.01,
//     description:
//       "A delicious Italian Gourmet Burger made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m09/400/300",
//   },
//   {
//     item_id: "res_001_m10",
//     name: "Italian Handmade Pasta",
//     price: 29.43,
//     description:
//       "A delicious Italian Handmade Pasta made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m10/400/300",
//   },
//   {
//     item_id: "res_001_m11",
//     name: "Italian Savory Wrap",
//     price: 11.31,
//     description:
//       "A delicious Italian Savory Wrap made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m11/400/300",
//   },
//   {
//     item_id: "res_001_m12",
//     name: "Italian Roasted Delight",
//     price: 38.58,
//     description:
//       "A delicious Italian Roasted Delight made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m12/400/300",
//   },
//   {
//     item_id: "res_001_m13",
//     name: "Italian Ocean Catch",
//     price: 38.79,
//     description:
//       "A delicious Italian Ocean Catch made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m13/400/300",
//   },
//   {
//     item_id: "res_001_m14",
//     name: "Italian Sizzling Skillet",
//     price: 38.62,
//     description:
//       "A delicious Italian Sizzling Skillet made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m14/400/300",
//   },
//   {
//     item_id: "res_001_m15",
//     name: "Italian Braised Medley",
//     price: 16.47,
//     description:
//       "A delicious Italian Braised Medley made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m15/400/300",
//   },
//   {
//     item_id: "res_001_m16",
//     name: "Italian Sweet Finale",
//     price: 41.53,
//     description:
//       "A delicious Italian Sweet Finale made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m16/400/300",
//   },
//   {
//     item_id: "res_001_m17",
//     name: "Italian Iced Refreshment",
//     price: 35.07,
//     description:
//       "A delicious Italian Iced Refreshment made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m17/400/300",
//   },
//   {
//     item_id: "res_001_m18",
//     name: "Italian Warm Comfort",
//     price: 37.29,
//     description:
//       "A delicious Italian Warm Comfort made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m18/400/300",
//   },
//   {
//     item_id: "res_001_m19",
//     name: "Italian Zesty Bowl",
//     price: 39.99,
//     description:
//       "A delicious Italian Zesty Bowl made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m19/400/300",
//   },
//   {
//     item_id: "res_001_m20",
//     name: "Italian Umami Treat",
//     price: 27.03,
//     description:
//       "A delicious Italian Umami Treat made with fresh, locally sourced ingredients.",
//     image: "https://picsum.photos/seed/res_001_m20/400/300",
//   },
// ];

// menuArr.filter(function (obj) {
//   return obj.price > 20;
// });

// Reduce = sum

// let sum = arr.reduce(function (acc, curr) {
//   return acc + curr;
// },10);

// console.log(sum);\
let arr = [1, 2, 3, 4, 5, 6];

let ans = arr
  .map(function (ele) {
    return ele * ele;
  })
  .filter(function (ele) {
    return ele % 2 == 0;
  })
  .reduce(function (acc, curr) {
    return acc + curr;
  });

console.log(ans);
