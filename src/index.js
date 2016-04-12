import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.set('json spaces', 2);

app.use(express.static(`${__dirname}/html`));

const figure = [1, 2, 3];
const color = [1, 2, 3];
const paint = [1, 2, 3];
const quantity = [1, 2, 3];

const ob = [];
const game = [];

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
  game.push(obData);
  return { num: rnd, ob: obData };
}

function select() {
  console.log([ selectOne(), selectOne(), selectOne() ]);
}


figure.forEach(
  f => color.forEach(
    c => paint.forEach(
      p => quantity.forEach(
        q => init(f, c, p, q)
  ))));


select();

const port = process.env.PORT || 8080;

app.listen(port);
/* eslint no-console: 0 */
console.warn('Server listening on port', port);
