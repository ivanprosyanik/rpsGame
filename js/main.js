const choises = {
  rock: 'scissors',
  scissors: 'paper',
  paper: 'rock'
}

const btnRock = document.getElementById('rock-btn');
const btnPaper = document.getElementById('paper-btn');
const btnScissors = document.getElementById('scissors-btn');

const resultBox = document.querySelector('.result__box');
const enemyBox = document.querySelector('.result__enemy')

function playGame(playerChoise) {
  const choise = ['rock', 'paper', 'scissors'];
  let computerChoice = choise[Math.floor(Math.random() * choise.length)]
  if (computerChoice === playerChoise) {
    console.log(`This is Draw. Computer choised ${computerChoice}`);
    clearRes(draw)
  } else if (choises[playerChoise] === computerChoice) {
    console.log(`This is WIN!!! Computer choised ${computerChoice}`);
    clearRes(win)
  } else {
    console.log(`You lose :( Computer choised ${computerChoice}`);
    clearRes(lose)
  }
  if (computerChoice === 'rock') {
    clearEnem(pcRock)
  } else if (computerChoice === 'scissors') {
    clearEnem(pcScissors)
  } else {
    clearEnem(pcPaper)
  }
}

function clearRes(res) {
  resultBox.innerHTML = ''
  resultBox.classList.remove('active');
  resultBox.scrollTo({ top: 0, behavior: 'auto' });
  setTimeout(() => {
    resultBox.insertAdjacentHTML('afterbegin', res)
    resultBox.classList.add('active')
    resultBox.scrollIntoView({ behavior: 'smooth' });
  }, 1000)
}
function clearEnem(res) {
  enemyBox.innerHTML = ''
  enemyBox.classList.remove('active');
  enemyBox.scrollTo({ top: 0, behavior: 'auto' });
  setTimeout(() => {
    enemyBox.insertAdjacentHTML('afterbegin', res)
    enemyBox.classList.add('active')
    enemyBox.scrollIntoView({ behavior: 'smooth' });
  }, 1000)
}

const win = `
<div class="result__head" style="background-image: url('img/cup.svg');"></div>
<p class="result__text"><span>Вы выиграли!</span></p>
`;

const draw = `
<div class="result__head" style="background-image: url('img/draw.svg');"></div>
<p class="result__text"><span>Ничья!</span></p>
`;

const lose = `
<div class="result__head" style="background-image: url('img/lose.svg');"></div>
<p class="result__text"><span>Вы проиграли.</span></p>
`;

const pcRock = `
<article class="header__card card" style="background-image: url('img/rock.svg');"></article>
<span class="card__name">Камень</span>
`;

const pcScissors = `
<article class="header__card card" style="background-image: url('img/scissors.svg');"></article>
<span class="card__name">Ножницы</span>
`;

const pcPaper = `
<article class="header__card card" style="background-image: url('img/paper.svg');"></article>
<span class="card__name">Бумага</span>
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