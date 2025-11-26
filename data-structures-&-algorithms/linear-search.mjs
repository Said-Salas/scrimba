import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i
        }
    }
    return -1
}

console.log("Type \"exit\" to end program")

let inputOne = []
let inputTwo = 0
const rdln = readline.createInterface({ input, output })
while (1) {
    inputOne = await rdln.question('Enter an array of numbers: ');

    if(inputOne.trim().toLowerCase() === 'exit') {
        rdln.close()
        break
    }

    inputTwo = await rdln.question('Enter target number to find: ')
    console.log(linearSearch(inputOne, inputTwo))
}



/*
Algorithm: Linear Search
Input: array of numbers, and target
Output: index of target in array, or -1 if not found

Steps:
1. Loop over the array:
2.   If the element is the target:
3.     Return the index.
4. Return -1.
*/

/*
Challenge:
***********

Implement the linear search algorithm. Call the function linearSearch() and make sure to export it. When done, run the tests in the terminal with ’npm test’ to make sure it works. At the end, provide its time and space complexity.
*/ 