import { Server } from 'ws';
import { newGame } from './game.js';
import { getGame } from './game.js';

const PORT = 9000;
const server = new Server({ port: PORT });

server.sendAll = data => {
  server.clients.forEach(client => client.send(data));
};


function clientConnection(client) {
  newGame();
  /* console.log(client); */
}

function clientSendMessage(client, mes) {
  console.log('test');
  if (mes.action === 'user') client.send(JSON.stringify(getGame()));
  if (mes.action === 'newGame') client.send(JSON.stringify(newGame()));
}


server.on('connection', client => {
  clientConnection(client);
  client.on('message', message => clientSendMessage(client, JSON.parse(message)));
});

if (server) {
  /* eslint no-console: 0 */
  console.warn('WS Server listening on port', PORT);
}
