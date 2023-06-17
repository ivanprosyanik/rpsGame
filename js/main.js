const choises = {
  rock: 'scissors',
  scissors: 'paper',
  paper: 'rock'
}

const btnRock = document.getElementById('rock-btn');
const btnPaper = document.getElementById('paper-btn');
const btnScissors = document.getElementById('scissors-btn');

const resultBox = document.querySelector('.result__box');

function playGame(playerChoise) {
  const choise = ['rock', 'paper', 'scissors'];
  let computerChoice = choise[Math.floor(Math.random() * choise.length)]
  if (computerChoice === playerChoise) {
    console.log(`This is Draw. Computer choised ${computerChoice}`);
    // resultBox.insertAdjacentHTML('afterbegin', draw)
    clearRes(draw)
  } else if (choises[playerChoise] === computerChoice) {
    console.log(`This is WIN!!! Computer choised ${computerChoice}`);
    // resultBox.insertAdjacentHTML('afterbegin', win)
    clearRes(win)
  } else {
    console.log(`You lose :( Computer choised ${computerChoice}`);
    // resultBox.insertAdjacentHTML('afterbegin', lose)
    clearRes(lose)
  }
}

function clearRes(res) {
  resultBox.innerHTML = ''
  resultBox.classList.remove('active');
  setTimeout(() => {
    resultBox.insertAdjacentHTML('afterbegin', res)
    resultBox.classList.add('active')
  }, 400)
}

const win = `
<div class="result__head" style="background-image: url('img/cup.svg');"></div>
<p class="result__text"><span>Вы выиграли!</span> Поздравляю</p>
`;

const draw = `
<div class="result__head" style="background-image: url('img/draw.svg');"></div>
<p class="result__text"><span>Ничья!</span> Победила дружба!</p>
`;

const lose = `
<div class="result__head" style="background-image: url('img/lose.svg');"></div>
<p class="result__text">К сожалению, <span>Вы проиграли.</span> Ну ничего, повезет в другой раз </p>
`;

btnRock.addEventListener('click', () => {
  let playerChoise = 'rock';
  // resultBox.classList.add('active')
  playGame(playerChoise)
});
btnPaper.addEventListener('click', () => {
  let playerChoise = 'paper';
  // resultBox.classList.add('active')
  playGame(playerChoise)
});
btnScissors.addEventListener('click', () => {
  let playerChoise = 'scissors';
  // resultBox.classList.add('active')
  playGame(playerChoise)
});


