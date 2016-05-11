import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import debugFoo from 'debug';
const debug = debugFoo('cards');
require('./server/run.js');


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.set('json spaces', 2);

app.use(express.static(`${__dirname}/html`));


const port = process.env.PORT || 80;

app.listen(port);
/* eslint no-console: 0 */
debug('Http listening on port', port);
