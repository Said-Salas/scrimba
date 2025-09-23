const inputBtn = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")
const resultOne = document.getElementById("result-one")
const resultTwo = document.getElementById("result-two")
const resultThree = document.getElementById("result-three")
const errorEl = document.getElementById("error-msg")

function convertOp(){
    if (Number(inputBtn.value)){
        errorEl.style.color = "#6943FF"
        let number = Number(inputBtn.value)
        let feetValue = number * 3.281
        let meterValue = number / 3.281
        let gallonValue = number / 3.7854
        let literValue = number * 3.7854
        let poundValue =  number * 2.204
        let kilogramValue = number / 2.204

        resultOne.innerHTML = `${number} meters = ${feetValue.toFixed(3)} feet | ${number} feet  = ${meterValue.toFixed(3)} meters`
        resultTwo.innerHTML = `${number} liters = ${gallonValue.toFixed(3)} gallons | ${number} gallons  = ${literValue.toFixed(3)} liters`
        resultThree.innerHTML = `${number} kilos = ${poundValue.toFixed(3)} pounds | ${number} pounds  = ${kilogramValue.toFixed(3)} kilos`
    }
    else {
        errorEl.style.color = "yellow"
        errorEl.innerHTML = "Please insert a valid numerical value,"
    }
    
       

}

convertBtn.addEventListener("click", convertOp)
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
// */