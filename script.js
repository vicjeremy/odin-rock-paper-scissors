let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let result = Math.random();
  if (result < 0.333) {
    return "rock";
  } else if (result < 0.666) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let human = prompt("Enter rock, paper, or scissors: ").toLowerCase();
  return human;
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice + computerChoice) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      return `Tie`;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      computerScore += 1;
      return `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`;
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      humanScore += 1;
      return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    default:
        return `Invalid input`
  }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        
    }
    console.log(`Computer Score: ${computerScore}\nHuman Score: ${humanScore}`)
    const winner = (computerScore, humanScore) => {
        if (computerScore > humanScore){
            return 'Computer Win!'
        }else if (computerScore < humanScore){
            return "Human Win!";
        }else{
            return 'Draw Match'
        }
    }
    return winner(computerScore, humanScore)

}

console.log(playGame())
