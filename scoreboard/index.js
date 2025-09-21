let score = document.getElementsByClassName("scoreboard")[0]
let scoreTwo = document.getElementsByClassName("scoreboard")[1]
const btnOne = document.getElementsByClassName("btn-one")[0]
const btnTwo = document.getElementsByClassName("btn-two")[0]
const btnThree = document.getElementsByClassName("btn-three")[0]
const btnFour = document.getElementsByClassName("btn-four")[0]
const btnFive = document.getElementsByClassName("btn-five")[0]
const btnSix = document.getElementsByClassName("btn-six")[0]
const btnReset = document.getElementsByClassName("btn-reset")[0]
let countOne = 0
let countTwo = 0


function addOne_scoreboardOne() {
    countOne += 1
    score.innerText = countOne
}

function addTwo_scoreboardOne() {
    countOne += 2
    score.innerText = countOne
}

function addThree_scoreboardOne() {
    countOne += 3
    score.innerText = countOne
}

function addOne_scoreboardTwo() {
    countTwo += 1
    scoreTwo.innerText = countTwo
}

function addTwo_scoreboardTwo() {
        countTwo += 2
        scoreTwo.innerText = countTwo
}

function addThree_scoreboardTwo() {
        countTwo += 3
        scoreTwo.innerText = countTwo
}

function resetScores() {
    countOne = 0
    countTwo = 0
    score.innerText = "0"
    scoreTwo.innerText = "0"
}



btnOne.addEventListener("click", addOne_scoreboardOne)
btnTwo.addEventListener("click", addTwo_scoreboardOne)
btnThree.addEventListener("click", addThree_scoreboardOne)
btnFour.addEventListener("click", addOne_scoreboardTwo)
btnFive.addEventListener("click", addTwo_scoreboardTwo)
btnSix.addEventListener("click", addThree_scoreboardTwo)
btnReset.addEventListener("click", resetScores)
