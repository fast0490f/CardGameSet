import { Server } from 'ws';
import { newGame } from './game.js';
import { getGame } from './game.js';
import { checkGame } from './game.js';
let ban = [];
const PORT = 9000;
const server = new Server({ port: PORT });

server.sendAll = data => {
  server.clients.forEach(client => client.send(JSON.stringify(data)));
};


function clientConnection(client) {
  if (Object.keys(server.clients).length === 1) {
    client.send(JSON.stringify({ action: 'game', game: newGame() }));
  } else {
    client.send(JSON.stringify({ action: 'game', game: getGame() }));
  }
}


function clientSendMessage(client, mes) {
  if (mes.action === 'set') {
    if (typeof ban[client._socket.remoteAddress] === 'undefined') {
      const check = checkGame(mes.ob);
      if (check.action === 'win') {
        ban = [];
        server.sendAll({ action: 'game', game: check.game });
      } else {
        ban[client._socket.remoteAddress] = true;
        server.sendAll({ action: 'baned', user: 'lol :D' });
        client.send(JSON.stringify({ action: 'ban', user: 'lol :D' }));
      }
    } else {
      client.send(JSON.stringify({ action: 'ban', user: 'I\'m watching you loser, lol :D ' }));
    }
  }
}


server.on('connection', client => {
  clientConnection(client);
  client.on('message', message => clientSendMessage(client, JSON.parse(message)));
});

if (server) {
  /* eslint no-console: 0 */
  console.warn('WS Server listening on port', PORT);
}
