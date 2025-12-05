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
