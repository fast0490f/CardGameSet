const figure = [1, 2, 3];
const color = [1, 2, 3];
const paint = [1, 2, 3];
const quantity = [1, 2, 3];

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
  ob.splice(obData, 1);
  game.push({ num: rnd, ob: obData });
}

export function checkGame(data) {
  ck = [];
  ck[0] = 0;
  ck[1] = 0;
  ck[2] = 0;
  ck[3] = 0;

  
  if (game[data[0]].ob[0] === game[data[1]].ob[0] && game[data[1]].ob[0] === game[data[2]].ob[0]) {
    ck[0] = 1;
  } else {
   if (game[data[0]].ob[0] !== game[data[1]].ob[0] && game[data[1]].ob[0] !== game[data[2]].ob[0]) {
     ck[0] = 1;
   }
  }

  if (game[data[0]].ob[1] === game[data[1]].ob[1] && game[data[1]].ob[1] === game[data[2]].ob[1]) {
    ck[1] = 1;
  } else {
    if (game[data[0]].ob[1] !== game[data[1]].ob[1] && game[data[1]].ob[1] !== game[data[2]].ob[1]) {
      ck[1] = 1;
    }
  }

  if (game[data[0]].ob[2] === game[data[1]].ob[2] && game[data[1]].ob[2] === game[data[2]].ob[2]) {
    ck[2] = 1;
  } else {
    if (game[data[0]].ob[2] !== game[data[1]].ob[2] && game[data[1]].ob[2] !== game[data[2]].ob[2]) {
      ck[2] = 1;
    }
  }

  if (game[data[0]].ob[3] === game[data[1]].ob[3] && game[data[1]].ob[3] === game[data[2]].ob[3]) {
    ck[3] = 1;
  } else {
    if (game[data[0]].ob[3] !== game[data[1]].ob[3] && game[data[1]].ob[3] !== game[data[2]].ob[3]) {
      ck[3] = 1;
    }
  }


  if (ck[0] === ck[1] && ck[1] === ck[2] && ck[2] === ck[3]) {
    console.log('true');
  } else {
    console.log('false');
  }
  return data;
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
