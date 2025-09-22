const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
    "v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{",
    "[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById("btn-generate")
let password1 = document.getElementById("password-one")
let password2 = document.getElementById("password-two")
let characterOne = 0
let characterTwo = 0

generateBtn.addEventListener("click", passwordGenerator)

function passwordGenerator(){
    password1.textContent = ""
    password2 .textContent= ""
    for(let countOne = 0; countOne < 15; countOne++){
        characterOne = Math.floor(Math.random() * 91)
        password1.textContent += characters[characterOne]
    }
    for(let countOne = 0; countOne < 15; countOne++){
        characterTwo = Math.floor(Math.random() * 91)
        password2.textContent += characters[characterTwo]
    }
}
// console.log(characters.length)