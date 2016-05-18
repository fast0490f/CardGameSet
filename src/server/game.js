const figure = [3, 2, 1];
const color = [2, 1, 3];
const paint = [1, 3, 2];
const quantity = [2, 3, 1];

const prop = [0, 1, 2, 3];

let game = [];
let play = [];

function setCard(f, c, p, q) {
  game.push([f, c, p, q]);
}

export function checkSet(d) {
  const t = [];
  prop.forEach(p => {
    t[p] =
        play[d[0]][p] === play[d[1]][p] &&
        play[d[0]][p] === play[d[2]][p] &&
        play[d[1]][p] === play[d[2]][p] ||
        play[d[0]][p] !== play[d[1]][p] &&
        play[d[0]][p] !== play[d[2]][p] &&
        play[d[1]][p] !== play[d[2]][p];
  });
  return t[0] && t[1] && t[2] && t[3];
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
  return game;
}

export function getSetCount() {
  let SetCount = 0;
  play.forEach(
    (aa, a) => play.forEach(
      (bb, b) => play.forEach(
        (cc, c) => {
          if (a !== b && a !== c && b !== c) {
            if (checkSet([a, b, c])) {
              SetCount += 1;
            }
          }
        }
    )));
  return SetCount / 6;
}

function rndCard() {
  return 0 + Math.floor(Math.random() * ((game.length - 1) + 1 - 0));
}

function createCard() {
  const rnd = rndCard();
  play.push(game[rnd]);
  game.splice(rnd, 1);
}

function addPlay(length) {
  for (let i = 1; i <= length; i++) {
    createCard();
  }
  return play;
}

export function newGame() {
  init();
  return addPlay(12);
}

export function playGame() {
  return play;
}

export function deleteCard(ob) {
  play[ob[0]] = false;
  play[ob[1]] = false;
  play[ob[2]] = false;
  play = play.filter(value => value !== false);
  addPlay(3);
}
