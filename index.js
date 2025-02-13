function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0){
        return "rock"
    }else if(compChoice === 1){
        return "paper"
    }else if(compChoice === 2){
        return "scissors"
    }
}

function getHumanChoice(){
    let humanChoice = "";
    while(true){
        humanChoice = prompt("Enter rock, paper or scissors:").toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
            break;
        }else{
            alert('You entered an invalid option. Please type rock, paper or scissors.');
        }
    }
    return humanChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let roundNumber = 0;

     function playRound(humanChoice, computerChoice){
        let message = "";
        if (humanChoice === computerChoice){
            roundNumber ++;
            message = `Tie game! You both chose ${humanChoice}!`;
            console.log(message);
        }else if((humanChoice === "rock" && computerChoice === "scissors") || 
                 (humanChoice === "paper" && computerChoice === "rock") || 
                 (humanChoice === "scissors" && computerChoice === "paper"))
        {
            roundNumber ++;
            humanScore ++;
            message = `You win! ${humanChoice} beats ${computerChoice}!`;
            console.log(message);
        }else{
            roundNumber ++;
            computerScore ++;
            message = `You lose! ${computerChoice} beats ${humanChoice}!`; 
            console.log(message);       
        }
        console.log(`Round ${roundNumber} Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    while(roundNumber < 5){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();