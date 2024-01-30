console.log("hi");

const options =["rock","paper","scissors"]; //adding our options as strings in an array

const playScoreSpan = document.querySelector(".play-Score")
const compScoreSpan = document.querySelector(".comp-Score")
const runScore = document.querySelector(".run-score");
const p1 = document.createElement("p1");
runScore.appendChild(p1);

//adding buttons for player choices
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")

const outcomeDiv = document.querySelector(".outcome")
const restartDiv = document.querySelector(".restart")

//returns a random computer choice
function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
    console.log(choice);
}


getComputerChoice();

//game logic for winning or losing the game
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
//creating variables to track the score
let playerScore = 0;
let computerScore = 0;
let gameScore = 0;

//adding results for rounds, adding results to html
function playRound(playerSelection,computerSelection) {
    const result = checkWinner(playerSelection,computerSelection);
    if (result == "Tie") {
        const p = document.createElement("p");
        p.innerText = "It's a tie";
        outcomeDiv.appendChild(p);
        gameScore++ //appending the game score
        

    }
    else if (result == "Player") {
        const p = document.createElement("p");
        p.innerText = `You win, ${playerSelection} beats ${computerSelection}`;
        outcomeDiv.appendChild(p);
        playerScore++
        gameScore++
    
    }
    else {
        const p = document.createElement("p");
        p.innerText = `You lose, ${computerSelection} beats ${playerSelection}`;
        outcomeDiv.appendChild(p);
        computerScore++
        gameScore++

    }


}
//rendering scores on screen
function updateScore(playerScore,computerScore) {
    p1.innerText = `Player Score: ${playerScore}  Computer Score: ${computerScore}`;

}

//no longer in use, user was asked to type the choice, now it is on-click
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
//changes the player selection variable to a clicked button
rockButton.addEventListener("click", () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    checkForWinner(playerScore, computerScore);
    updateScore(playerScore,computerScore);
    
    
})

paperButton.addEventListener("click", () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    checkForWinner(playerScore, computerScore);
    updateScore(playerScore,computerScore);
    
    
})

scissorsButton.addEventListener("click", () => {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    checkForWinner(playerScore, computerScore);
    updateScore(playerScore,computerScore);
    

})



function handler(e) {
    if(e.target.className=="rock"){
      e.stopPropagation();
      e.preventDefault();
    }
    else if(e.target.className=="paper"){
        e.stopPropagation();
        e.preventDefault();
    }
    else if(e.target.className=="scissors"){
        e.stopPropagation();
        e.preventDefault();
    }
}



function checkForWinner (playerScore, computerScore) {
    if (playerScore > computerScore && gameScore == 5) {
            const h1 = document.createElement("h1");
            h1.innerText = `You win the game by: ${playerScore} to ${computerScore}`; //winning game output
            outcomeDiv.append(h1);
            const restartBtn = document.createElement("button") //reseting the window onclick
            restartBtn.addEventListener("click", () => {
                window.location.reload();
            })
            restartBtn.setAttribute('style', 'color: blue; background: purple; padding: 20px; width: 200px; text-align: center;');
            restartBtn.textContent = 'RESTART';
            restartDiv.appendChild(restartBtn);
            document.addEventListener("click", handler, true);
            handler(e);

            
            
    }
    else if (playerScore < computerScore && gameScore == 5){ //tracks the game till 5 rounds are completed
            const h1 = document.createElement("h1");
            h1.innerText = `You lose the game by: ${computerScore} to ${playerScore}`; //losing game output
            outcomeDiv.append(h1);
            const restartBtn = document.createElement("button")
            restartBtn.addEventListener("click", () => {
                window.location.reload();
            })
            restartBtn.setAttribute('style', 'color: blue; background: purple; padding: 20px; width: 200px; text-align: center;'); //adding a restard game button
            restartBtn.textContent = 'RESTART';
            restartDiv.appendChild(restartBtn);
            document.addEventListener("click", handler, true);
            handler(e);
            
    }
    else if (playerScore == computerScore && gameScore == 5) {
            const h1 = document.createElement("h1");
            h1.innerText = `It's a tie game: ${computerScore} , ${playerScore}`; //tie game output
            outcomeDiv.append(h1);
            const restartBtn = document.createElement("button")
            restartBtn.addEventListener("click", () => {
                window.location.reload();
            })
            restartBtn.setAttribute('style', 'color: blue; background: purple; padding: 20px; width: 200px; text-align: center;'); 
            restartBtn.textContent = 'RESTART';
            restartDiv.appendChild(restartBtn);
            document.addEventListener("click", handler, true);
            handler(e);
    }
}





    

