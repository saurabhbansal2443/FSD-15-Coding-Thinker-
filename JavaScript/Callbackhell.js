function makeDough(cb) {
  setTimeout(function () {
    let dough = "dough ";
    // console.log("Dough Prepared");
    cb(dough);
  }, 2000);
}
function makeBase(dough, cb) {
  setTimeout(function () {
    let base = dough + " heat ";
    // console.log("Base is ready");
    cb(base);
  }, 2000);
}

function addTopings(base, cb) {
  setTimeout(function () {
    let topingsPizza = base + "Veggies";
    cb(topingsPizza);
  }, 2000);
}

makeDough(function (dough) {
  console.log(dough);
  makeBase(dough, function (base) {
    console.log(base);
    addTopings(base, function (topingsPizza) {
      console.log(topingsPizza);
    });
  });
});
