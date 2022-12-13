function getComputerSelection(){
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1){
        return "ROCK";
    }
    else if (num === 2){
        return "PAPER"
    }
    else
        return "SCISSORS";
}

function getPlayerSelection(){
        let playerChoice = prompt("Make your choice - Rock, Paper or Scissors?")
        return playerChoice.toUpperCase();
}

function playRound(playerChoice, computerChoice){
    console.log(`You chose: ${playerChoice} and the computer chose: ${computerChoice}`);
    if ((playerChoice === 'SCISSORS' && computerChoice === 'ROCK')
        || (playerChoice === 'ROCK' && computerChoice === 'PAPER')
            || (playerChoice === 'PAPER' && computerChoice === 'SCISSORS')){
                computerRounds++;
                return `You lose! ${computerChoice} beats ${playerChoice}!`;
            }
                
    else if ((computerChoice === 'SCISSORS' && playerChoice === 'ROCK')
            || (computerChoice === 'ROCK' && playerChoice === 'PAPER')
                || (computerChoice === 'PAPER' && playerChoice === 'SCISSORS')){
                    playerRounds++;
                    return `You won! ${playerChoice} beats ${computerChoice}!`;
                }
    else
        return `It's a tie!`;
}

let computerRounds = 0;
let playerRounds = 0;

function game(){
    for (let i = 0; i < 1; i++){
        console.log(`${i + 1}# round:`);
        console.log(playRound(getPlayerSelection(), getComputerSelection()));
    }
    console.log(`FINAL SCORE`);
    console.log(`HUMANS: ${playerRounds} - MACHINES: ${computerRounds}`);
    if (computerRounds > playerRounds)
        console.log("The machines have won! And so the rebellion begins...");
    else if (computerRounds < playerRounds)
        console.log("Humans have won. Hasta la vista, terminator!");
    else
        console.log("It's a tie! Humans and machines are both equally smart... or dumb...");
};

game();

