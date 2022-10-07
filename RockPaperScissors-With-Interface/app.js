

let userScore = 0;
let compScore = 0;

const compchoiceDisplay = document.getElementById("computer-choice");
const userchoiceDisplay = document.getElementById("player-choice");
const result = document.getElementById("result");
const choice = document.querySelectorAll("button");
const userscore = document.getElementById("user-score");
const compscore = document.getElementById("computer-score");
let userChoice;
let computerChoice;
let resultFinal;

choice.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userchoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      computerChoice = "👊";
      break;
    case 2:
      computerChoice = "✋";
      break;
    case 3:
      computerChoice = "✌️";
      break;
  }
  console.log(computerChoice);
  compchoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    resultFinal = "It's a Draw!";
  } else if (
    (userChoice === "👊" && computerChoice === "✌️") ||
    (userChoice === "✋" && computerChoice === "👊") ||
    (userChoice === "✌️" && computerChoice === "✋")
  ) {
    resultFinal = "You Win!";
    win();
  }else{
    resultFinal = "You Lose!";
    lose();
  }
  result.innerHTML = resultFinal;
}

function win(){
    userScore++;
    userscore.innerHTML = userScore;
}

function lose(){
    compScore++;
    compscore.innerHTML = compScore;
}
