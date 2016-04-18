const figure = [3, 2, 1];
const color = [2, 1, 3];
const paint = [1, 3, 2];
const quantity = [2, 3, 1];

let ob = [];
let game = [];
let ck = [];

function init(f, c, p, q) {
  ob.push([f, c, p, q]);
}

function obrnd() {
  return 0 + Math.floor(Math.random() * ((ob.length - 1) + 1 - 0));
}

function selectOne() {
  const rnd = obrnd();
  const obData = ob[rnd];
  ob.splice(rnd, 1);
  game.push(obData);
}

function deleteCard(data) {
  const _game = [];

  game[data[0]] = false;
  game[data[1]] = false;
  game[data[2]] = false;

  game.forEach((g) => {
    if (g !== false) _game.push(g);
  });

  game = _game;
}


function addCard() {
  selectOne();
  selectOne();
  selectOne();
  console.log(ob.length);
}


export function checkGame(data) {
  ck = [];
  ck[0] = 0;
  ck[1] = 0;
  ck[2] = 0;
  ck[3] = 0;


  if (game[data[0]][0] === game[data[1]][0] && game[data[1]][0] === game[data[2]][0]) {
    ck[0] = 1;
  } else {
   if (game[data[0]][0] !== game[data[1]][0] && game[data[1]][0] !== game[data[2]][0] && game[data[2]][0] !== game[data[0]][0]) {
     ck[0] = 1;
   }
  }

  if (game[data[0]][1] === game[data[1]][1] && game[data[1]][1] === game[data[2]][1]) {
    ck[1] = 1;
  } else {
    if (game[data[0]][1] !== game[data[1]][1] && game[data[1]][1] !== game[data[2]][1] && game[data[2]][1] !== game[data[0]][1] ) {
      ck[1] = 1;
    }
  }

  if (game[data[0]][2] === game[data[1]][2] && game[data[1]][2] === game[data[2]][2]) {
    ck[2] = 1;
  } else {
    if (game[data[0]][2] !== game[data[1]][2] && game[data[1]][2] !== game[data[2]][2] && game[data[2]][2] !== game[data[0]][2]) {
      ck[2] = 1;
    }
  }

  if (game[data[0]][3] === game[data[1]][3] && game[data[1]][3] === game[data[2]][3]) {
    ck[3] = 1;
  } else {
    if (game[data[0]][3] !== game[data[1]][3] && game[data[1]][3] !== game[data[2]][3] && game[data[2]][3] !== game[data[0]][3]) {
      ck[3] = 1;
    }
  }


  if (ck[0] === 1 && ck[1] === 1 && ck[2] === 1 && ck[3] === 1) {

    deleteCard(data);
    addCard();
    return { action: 'win', game };
  }

  return { action: 'ban' };
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
