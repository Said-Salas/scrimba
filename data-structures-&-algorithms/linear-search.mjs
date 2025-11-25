import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { read } from 'node:fs'

console.log("Type \"exit\" to end program")
const rdln = readline.createInterface({ input, output })
while (1) {
    const answer = await rdln.question('Enter an array of numbers: ');

    s
    console.log(answer)
}

const findNumber = (array, target) => {
    
}