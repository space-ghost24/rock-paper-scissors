let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
let gameOver = false;

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

function playRound(humanChoice, computerChoice){
    if (gameOver) return;

    let message = "";

    if (humanChoice === computerChoice){
        roundNumber ++;
        message = `Tie game! You both chose ${humanChoice}!`;
    }else if((humanChoice === "rock" && computerChoice === "scissors") || 
             (humanChoice === "paper" && computerChoice === "rock") || 
             (humanChoice === "scissors" && computerChoice === "paper"))
    {
        roundNumber ++;
        humanScore ++;
        message = `You win! ${humanChoice} beats ${computerChoice}!`;
    }else{
        roundNumber ++;
        computerScore ++;
        message = `You lose! ${computerChoice} beats ${humanChoice}!`;        
    }
    
    const scoreboard = document.querySelector('.scoreboard');

    while (scoreboard.firstChild) {
        scoreboard.removeChild(scoreboard.firstChild);
    }

    const para = document.createElement('p');
    messageElement.textContent = message;
    scoreboard.appendChild(messageElement);

    const scoreElement = document.createElement('p');
    scoreElement.textContent = `Round ${roundNumber} Score: Human ${humanScore} - Computer ${computerScore}`;
    scoreboard.appendChild(scoreElement);

    if (humanScore === 5) {
        gameOver = true;  
        const winnerMessage = document.createElement('p');
        winnerMessage.textContent = "Congratulations! You won the game!";
        scoreboard.appendChild(winnerMessage);
    } else if (computerScore === 5) {
        gameOver = true;  
        const loserMessage = document.createElement('p');
        loserMessage.textContent = "Sorry, the computer won the game!";
        scoreboard.appendChild(loserMessage);
    }
}

const buttons = document.querySelectorAll('.gameButtons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.className; 
        const computerChoice = getComputerChoice(); 
        playRound(humanChoice, computerChoice); 
    });
});