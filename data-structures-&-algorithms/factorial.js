const factorialCalculator = number => {
let sum = 0
  for(let i = number - 1; i >= 1; i--){
    sum = number * i
    number = sum
  }
  return sum
}

// console.log(factorialCalculator(0))

//with recursion
let factorial = 0
const recursiveFactorial = number => {
    if (number === 0){
        return factorial
    }
    else if (factorial === 0){
        factorial = number * (number - 1)
    }
    else if(number === 1){
        factorial = factorial 
    }
    else {
        factorial = factorial * (number - 1)
    }
    number = number - 1 
    recursiveFactorial(number)
    return factorial
}

// console.log(recursiveFactorial(10))
const improvedRecursiveFactorial = number => {
    if (number === 2) {
        return number
    }
    improvedRecursiveFactorial(number - 1)
    return number * (number - 1)
}

console.log(improvedRecursiveFactorial(10))