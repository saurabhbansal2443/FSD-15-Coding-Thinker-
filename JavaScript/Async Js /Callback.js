// 1) - Making Base
// 2) - Applying Sauces
// 3) - Baking

function makePizza() {
  let raw = "maida";
  setTimeout(function makeBase() {
    let dough = `${raw}--> dough`;
    console.log(dough);
    setTimeout(function applySauces() {
      let base = `dough-> sauces`;
      console.log(base);
      setTimeout(function bake() {
        let Pizza = `base--> heat`;
        console.log(Pizza);
      }, 2000);
    }, 2000);

    return dough;
  }, 2000);
}
console.log("Start");
makePizza();
console.log("End");
