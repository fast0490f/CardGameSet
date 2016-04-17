const figure = [1, 2, 3];
const color = [1, 2, 3];
const paint = [1, 2, 3];
const quantity = [1, 2, 3];

let ob = [];
let game = [];

function init(f, c, p, q) {
  ob.push([f, c, p, q]);
}

function obrnd() {
  return 0 + Math.floor(Math.random() * ((ob.length - 1) + 1 - 0));
}

function selectOne() {
  const rnd = obrnd();
  const obData = ob[rnd];
  ob.splice(obData, 1);
  game.push({ num: rnd, ob: obData });
}

export function selectStart() {
  selectOne();
  selectOne();
  selectOne();
  selectOne();
  selectOne();
  selectOne();
  selectOne();
  selectOne();
  selectOne();
  selectOne();
  selectOne();
  selectOne();
  return game;
}

export function newGame() {
  ob = [];
  game = [];
  figure.forEach(
    f => color.forEach(
      c => paint.forEach(
        p => quantity.forEach(
          q => init(f, c, p, q)
    ))));
  return selectStart();
}


export function getGame() {
  return game;
}
