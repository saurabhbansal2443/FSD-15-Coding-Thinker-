// what is a function ?
// Function is a block of code to perform sepecific task

function fibbobnacciPrint(n) {
  let ft = 0;
  let st = 1;
  for (let i = 1; i <= n; i++) {
    console.log(ft);
    let tt = ft + st;
    ft = st;
    st = tt;
  }
//   return 1;
}

let ans = fibbobnacciPrint(7);

console.log(ans);
