import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output} from 'node:process'

export const binarySearch = (array, target) => {
    let left = 0
    let right = array.slice(array.length - 1)
    while (left < right) {
        let m = Math.floor((right + left)/2)
        if (array[m] === target) return m
        if (array[m] < target) {
            left = m + 1
        } else {
            right = m - 1
        }
    }
    return -1
}

console.log("Type \"exit\" to end program")

let inputOne = []
let inputTwo = ""
const rdln = readline.createInterface({ input, output })
while (1) {
    inputOne = await rdln.question('Enter an array of numbers: ')

    if(inputOne.trim().toLowerCase() == 'exit') {
        rdln.close()
        break
    }

    const parsedArray = inputOne
        .replace(/[\[\]]/g, '')
        .split(',')
        .map(item => item.trim())

    inputTwo = await rdln.question('Enter target number to find: ')
    console.log(`The index number of ${inputTwo} in array ${inputOne} is ${binarySearch(parsedArray, inputTwo)}`)
}
/*
Algorithm: Binary Search
Input: array of sorted numbers, and target
Output: index of target in array, or -1 if not found

Steps:
1. Init l to 0.
2. Init r to point to the last element in the array.
3. Loop as long as l did not pass r:
4.   Init m to be the middle point between l and r.
5.   If the value at m is the target:
6.     Return m.
7.   Else if the value at m is less than the target:
8.     Move l to right after m.
9.   Else:
10.    Move r to right before m.
11. Return -1.
*/

/*
Challenge:
***********

Implement the binary search algorithm. Call the function binarySearch() and make sure to export it. When done, run the tests in the terminal with ’npm test’ to make sure it works.

Note: If needed, see hint.md for the formula.
*/