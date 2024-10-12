const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1){
        computerChoice = 'piedra'
    }
    
    if (randomNumber === 2){
        computerChoice = 'papel'
    }
    
    if (randomNumber === 3){
        computerChoice = 'tijera'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {
    if (computerChoice === userChoice) {
        result = 'Empate'
    }
    if (computerChoice === 'piedra' && userChoice === "papel"){
        result = 'Ganaste'
    }
    if (computerChoice === 'piedra' && userChoice === "tijera"){
        result = 'Perdiste'
    }
    if (computerChoice === 'papel' && userChoice === "tijera"){
        result = 'Ganaste'
    }
    if (computerChoice === 'Papel' && userChoice === "piedra"){
        result = 'Perdiste'
    }
    if (computerChoice === 'tijera' && userChoice === "piedra"){
        result = 'Ganaste'
    }
    if (computerChoice === 'tijera' && userChoice === "papel"){
        result = 'Perdiste'
    }
    resultDisplay.innerHTML = result
}