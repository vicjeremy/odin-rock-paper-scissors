function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);
  switch (result) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

const score = document.createElement("div");
score.setAttribute("id", "runningScore");
const humanScores = document.createElement("p");
const compScores = document.createElement("p");
humanScores.textContent = "Human Score: ";
compScores.textContent = "Computer Score: ";
let humans = document.createTextNode("0");
let comps = document.createTextNode("0");
humanScores.appendChild(humans);
compScores.appendChild(comps);
score.appendChild(humanScores);
score.appendChild(compScores);
document.body.appendChild(score);

const btnContainer = document.createElement("div");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
btnContainer.setAttribute("id", "btnContainer");
rock.setAttribute("id", "rock");
rock.textContent = "ROCK";
paper.setAttribute("id", "paper");
paper.textContent = "PAPER";
scissors.setAttribute("id", "scissors");
scissors.textContent = "SCISSORS";
btnContainer.appendChild(rock);
btnContainer.appendChild(paper);
btnContainer.appendChild(scissors);
document.body.appendChild(btnContainer);

const resultRound = document.createElement("div");
const statusRound = document.createElement("p");
resultRound.setAttribute("id", "result");
resultRound.style.whiteSpace = "pre-wrap";
document.body.appendChild(resultRound);

const winner = document.createElement("div");
winner.setAttribute("id", "winner");
document.body.appendChild(winner);

let humanScore = 0;
let computerScore = 0;

function playRound(e) {
  let computerChoice = getComputerChoice();
  let humanChoice = e.target.id;
  console.log(humanChoice);
  console.log(computerChoice);
  switch (humanChoice + computerChoice) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      return updateScore(
        `Tie! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} equals ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}\n`,
      );
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      computerScore++;
      return updateScore(
        `You lose! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} lose to ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}\n`,
      );
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      humanScore++;
      return updateScore(
        `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}\n`,
      );
    default:
      return updateScore(`Invalid input`);
  }
}

function updateScore(text) {
  humans.textContent = humanScore;
  comps.textContent = computerScore;
  statusRound.textContent += text;
  resultRound.prepend(statusRound);
  checkWin();
}

function checkWin() {
  if (computerScore == 5) {
    computerScore = 0;
    humanScore = 0;
    winner.textContent = "Computer Wins!";
  } else if (humanScore == 5) {
    computerScore = 0;
    humanScore = 0;
    winner.textContent = "Human Wins!";
  }
}

function main() {
  btnContainer.addEventListener("click", function (e) {
    if (winner.textContent !== "") {
      winner.textContent = "";
      statusRound.textContent = "";
    }
    playRound(e);
  });
}

main();
