import { Server } from 'ws';
import { clientConnection } from './core.js';
import { clientSendMessage } from './core.js';
import { clientClose } from './core.js';
import { checkJSON } from './core.js';

const PORT = 9000;
const server = new Server({ port: PORT });


server.on('connection', client => {
  clientConnection(client);
  client.on('message', message => clientSendMessage(client, checkJSON(message)));
  client.on('close', () => clientClose(client));
});

server.sendAll = data => {
  server.clients.forEach(client => client.send(JSON.stringify(data)));
};

if (server) {
  /* eslint no-console: 0 */
  console.warn('WS Server listening on port', PORT);
}
