import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import server from './server.js';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.set('json spaces', 2);

app.use(express.static(`${__dirname}/html`));


const port = process.env.PORT || 5000;

app.listen(port);
/* eslint no-console: 0 */
console.warn('Http listening on port', port);
