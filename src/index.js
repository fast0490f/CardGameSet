import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import debugFoo from 'debug';
import http from 'http';
const debug = debugFoo('cards');


const app = express();
export const _server = http.createServer(app);

require('./server/run.js');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.set('json spaces', 2);

app.use(express.static(`${__dirname}/html`));


const port = process.env.PORT || 80;

_server.listen(port);
/* eslint no-console: 0 */
debug('Http listening on port', port);
