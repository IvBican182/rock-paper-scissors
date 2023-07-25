console.log("hi");

const options =["rock","paper","scissors"];

function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
    console.log(choice);
}

getComputerChoice();

function checkWinner(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Player";
    }
    else if (playerSelection == "scissors" && computerSelection =="paper") {
        return "Player";
    } 
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Player";
    }
    else { return "Computer";
    }
}


function playRound(playerSelection,computerSelection) {
    const result = checkWinner(playerSelection,computerSelection);
    if (result == "Tie") {
        return `It's a tie! ${playerSelection} equals ${computerSelection}`;
    }
    else if (result == "Player") {
        return `You win, ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You lose, ${computerSelection} beats ${playerSelection}`;
    }
    

}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const playerChoice = prompt("Choose rock paper or scissors");
        if(playerChoice == null) {
            continue;
        }
        const choiceInLower = playerChoice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }

}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for(let i=0; i<5;i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log("--------------------");
        if(checkWinner(playerSelection,computerSelection) == "Player") {
            scorePlayer++;
        }
        else if(checkWinner(playerSelection,computerSelection) == "Computer") {
            scoreComputer++;
        }
    }
    console.log("game over");
    if(scorePlayer > scoreComputer) {
        console.log("You win");
    }else if (scoreComputer > scorePlayer) {
        console.log("you lose")
    }else {
        console.log("it's a tie");
    }
}

game();