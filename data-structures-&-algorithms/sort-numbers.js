const sortNumbers = numbers => {
  const sortedArray = []
  for(let i = 0; i < numbers.length - 1; i++){
    console.log(`i ${i}`)
      for(let j = 0; j < numbers.length - i - 1; j++){
        console.log(`j ${j}`)
        if(numbers[j] > numbers[j + 1]){
          const temporary = numbers[j]
          numbers[j] = numbers[j + 1]
          numbers[j + 1] = temporary
        }
      }
  }
}
  
  const numbers = [5,3, 2, 4, 1]
  sortNumbers(numbers)
  console.log(numbers)