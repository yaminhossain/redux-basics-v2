// General multi valued function
const add = (a, b) => a + b

// Function curry
const addCurry = (a) => (b) => a + b

console.log(addCurry(3)(5)); //8

function addCurry2(a) {
  return function (b) {
    return a + b
  }
}

function addCurry3(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
console.log(addCurry2(10)(4)); //14
console.log(addCurry2(10)(4)(3)); //17

//General function
const totalPrice = (discount, amount) => amount - amount * discount

//With Function currying
const totalPriceCurrying = (discount) => (amount) => amount - amount * discount
const withDiscount = totalPriceCurrying(0.3)

console.log(withDiscount(100));
console.log(withDiscount(200));
console.log(withDiscount(250));