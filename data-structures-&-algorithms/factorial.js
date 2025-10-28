const factorialCalculator = number => {
let sum = 0
  for(let i = number - 1; i >= 1; i--){
    sum = number * i
    number = sum
  }
  return sum
}

console.log(factorialCalculator(10))