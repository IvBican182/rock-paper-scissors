let items = ["rock", "paper", "scissors"];

let guess_input;
let winner = 0;
let humanScore = 0;
let computerScore = 0;

function computerPlay(arr) {
    let randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
    
}


console.log(computerPlay());

function round(playerSelection, computerSelection) {
    playerSelection = prompt("choose between rock ,paper or scissors:"); 
    computerSelection = computerPlay();
    guess_input = playerSelection;
    if (items.indexOf(guess_input.toLowerCase()) < 0) {
        console.log("invalid")
        console.log("current computer score is :" + computerScore);
        console.log("current human score is:" + humanScore);
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        computerScore +=1;
        console.log("PAPER, you loose");
        console.log("current computer score is :" + computerScore);
        console.log("current human score is:" + humanScore);
    }else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        humanScore +=1;
        console.log("ROCK, you win");
        console.log("current computer score is :" + computerScore);
        console.log("current human score is:" + humanScore);
    }else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        humanScore +=1;
        console.log("SCISSORS, you win");
        console.log("current computer score is :" + computerScore);
        console.log("current human score is:" + humanScore);
    }else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        computerScore +=1;
        console.log("ROCK, you loose");
        console.log("current computer score is :" + computerScore);
        console.log("current human score is:" + humanScore);
    }else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        humanScore +=1;
        console.log("PAPER, you win");
        console.log("current computer score is :" + computerScore);
        console.log("current human score is:" + humanScore);
    }else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        computerScore +=1;
        console.log("SCISSORS, you loose");
        console.log("current computer score is :" + computerScore);
        console.log("current human score is:" + humanScore);
    }else {
        console.log("YOU GOT THE SAME, its a tie!")
        console.log("current computer score is :" + computerScore);
        console.log("current human score is:" + humanScore);
    }
    win();
}

function game() {
    while( humanScore <= 5 || computerScore <= 5) {
        round();
    }
}

function win() {
    if (humanScore == 5) {
        console.log("you win the game")
    }else if (computerScore == 5) {
        console.log("you lose the game")
    }
}