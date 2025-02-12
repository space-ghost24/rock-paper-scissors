//FUNCTION to get computer choice
//WRITE the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
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

//TEST function 
//console.log(getComputerChoice())

//FUNCTION to get human choice
//WRITE a function that takes the user choice and returns it.

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

//TEST function
// console.log(getHumanChoice())

//DECLARE player and computer score variables and set to zero

// let humanScore = 0;
// let computerScore = 0;

//FUNCTION that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// function playRound(humanChoice, computerChoice){
//     let message = "";
//     if (humanChoice === computerChoice){
//         message = `Tie game! You both chose ${humanChoice}!`;
//         console.log(message);
//     }else if((humanChoice === "rock" && computerChoice === "scissors") || 
//              (humanChoice === "paper" && computerChoice === "rock") || 
//              (humanChoice === "scissors" && computerChoice === "paper"))
//     {
//         humanScore ++;
//         message = `You win! ${humanChoice} beats ${computerChoice}!`;
//         console.log(message);
//     }else{
//         computerScore ++;
//         message = `You lose! ${computerChoice} beats ${humanChoice}!`; 
//         console.log(message);       
//     }
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

//FUNCTION to play game consisting of 5 rounds

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