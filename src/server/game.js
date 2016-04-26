const figure = [3, 2, 1];
const color = [2, 1, 3];
const paint = [1, 3, 2];
const quantity = [2, 3, 1];

let game = [];
let _game = [];
let play = [];

function setCard(f, c, p, q) {
  game.push([f, c, p, q]);
}

function init() {
  game = [];
  play = [];
  figure.forEach(
    f => color.forEach(
      c => paint.forEach(
        p => quantity.forEach(
          q => setCard(f, c, p, q)
    ))));
  _game = game;
  return game;
}

function rndCard() {
  return 0 + Math.floor(Math.random() * (
    (game.filter(value => value !== false).length - 1) + 1 - 0));
}

function createCard(numberCard) {
  game[numberCard] = false;
  play.push(_game[numberCard]);
}

function addPlay(length) {
  for (let i = 1; i <= length; i++) {
    createCard(rndCard());
  }
  return play;
}

export function newGame() {
  init();
  return addPlay(12);
}
