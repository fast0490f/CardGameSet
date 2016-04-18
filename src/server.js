import { Server } from 'ws';
import { newGame } from './game.js';
import { getGame } from './game.js';
import { checkGame } from './game.js';

const PORT = 9000;
const server = new Server({ port: PORT });

server.sendAll = data => {
  server.clients.forEach(client => client.send(data));
};


function clientConnection(client) {
  if (Object.keys(server.clients).length === 1) {
    client.send(JSON.stringify(newGame()));
  } else {
    client.send(JSON.stringify(getGame()));
  }
}

function checkSet(ob) {
  console.log(checkGame(ob));
}

function clientSendMessage(client, mes) {
  if (mes.action === 'set') checkSet(mes.ob);
}


server.on('connection', client => {
  clientConnection(client);
  client.on('message', message => clientSendMessage(client, JSON.parse(message)));
});

if (server) {
  /* eslint no-console: 0 */
  console.warn('WS Server listening on port', PORT);
}
