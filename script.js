let humanScore = 0
let computerScore = 0


function getComputerChoice(){
    const choices= ["Rock","Paper","Scissors"]
    const randomize= choices[Math.floor(Math.random()*choices.length)]
    console.log("The computer chose: " +randomize)
    return randomize
}



function getHumanChoice(){
    let hChoice = prompt("Choose Between Rock, Paper and Scissors!")
    console.log("You chose: " +hChoice)
    return hChoice
}



function playRound(humanChoice,computerChoice){
    if  (humanChoice == computerChoice) {
        console.log("Draw!")
    } 
}

const huCHoice= getHumanChoice();
const coChoice = getComputerChoice();
playRound(huCHoice , coChoice);