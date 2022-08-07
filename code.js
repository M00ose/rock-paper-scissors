const options = ["rock", "paper", "knife"];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    min = Math.ceil(0);
    max = Math.floor(2);

    const index = Math.random() * (max - min) + min;
    return options[Math.round(index)];

}

function playRound(playerSelection, computerSelection) {
console.log(declareWinner());
if (declareWinner() == false) {
    if (playerSelection == "rock") {
    if (computerSelection == "paper") {
        status.textContent = "You lost";
        cScore.textContent = computerScore += 1;
    } else if (computerSelection == "knife") {
        status.textContent = "You won!";
        pScore.textContent = playerScore += 1;
    } else {
        status.textContent = "Draw! Try again.";
    }
    }

    if (playerSelection == "paper") {
    if (computerSelection == "knife") {
        status.textContent = "You lost";
        cScore.textContent = computerScore += 1;
    } else if (computerSelection == "rock") {
        status.textContent = "You won!";
        pScore.textContent = playerScore += 1;
    } else {
        status.textContent = "Draw! Try again.";
    }
    }

    if (playerSelection == "knife") {
    if (computerSelection == "rock") {
        status.textContent = "You lost";
        cScore.textContent = computerScore += 1;
    } else if (computerSelection == "paper") {
        status.textContent = "You won!";
        pScore.textContent = playerScore += 1;
    } else {
        status.textContent = "Draw! Try again.";
    }
    }

    declareWinner();
    } else {
        playerScore = 0;
        computerScore = 0;
        pScore.textContent = "0";
        cScore.textContent = "0";
        status.textContent = "";
    }
}

function declareWinner() {

    if (playerScore >= 3 || computerScore >= 3) {
        if (playerScore > computerScore) {
            status.textContent = "Congratulations! You Win!";
            return true;
        } else {
            status.textContent = "Oh no! You Lost!";
            return true;
        }
    } else {
        return false;
    }
}

const rock_btn = document.getElementById("btn-rock");
const paper_btn = document.getElementById("btn-paper");
const knife_btn = document.getElementById("btn-knife");
let pScore = document.getElementById("playerScore");
let cScore = document.getElementById("compScore");
let status = document.getElementById("game-status");

rock_btn.addEventListener("click", () =>
playRound("rock", getComputerChoice())
);
paper_btn.addEventListener("click", () =>
playRound("paper", getComputerChoice())
);
knife_btn.addEventListener("click", () =>
playRound("knife", getComputerChoice())
);