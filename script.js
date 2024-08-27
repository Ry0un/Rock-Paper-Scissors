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
    } else if( (humanChoice=="Rock" && (computerChoice=="Scissors")) || (humanChoice=="Paper" && (computerChoice=="Rock")) || (humanChoice=="Scissors" && (computerChoice=="Paper")) )
        {
            console.log("You WIN!!!")
            humanScore += 1;
    } else if ( (humanChoice=="Scissors" && (computerChoice=="Rock")) || (humanChoice=="Rock" && (computerChoice=="Paper")) || (humanChoice=="Paper" && (computerChoice=="Scissors")) ) 
        {
            console.log("You Lose monkey! 🐵")
            computerScore += 1;
        }
        
        
}


function playDaGame(){
    const huCHoice= ((getHumanChoice() ));
    for(i=0; i<5 ; i++){
        const coChoice = ((getComputerChoice() ));
        (playRound(huCHoice , coChoice));
        console.log("Your Score :" + humanScore)
        console.log("The Computer's score:" +computerScore)
    }
}

playDaGame();





