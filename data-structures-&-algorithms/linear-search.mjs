import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { read } from 'node:fs'

console.log("Type \"exit\" to end program")
while (1) {
    const rdln = readline.createInterface({ input, output })
    const array = await rdln.question('Enter an array of numbers: ');
    console.log(array)
}

const findNumber = (array, target) => {
    
}