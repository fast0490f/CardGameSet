import { Server } from 'ws';
import { clientConnection, clientSendMessage } from './core.js';
import { clientClose } from './core.js';
import { checkJSON } from './core.js';
import debugFoo from 'debug';
const debug = debugFoo('cards');

const PORT = 5000;
export const server = new Server({ port: PORT });

server.on('connection', client => {
  clientConnection(client);
  client.on('message', message => clientSendMessage(client, checkJSON(message)));
  client.on('close', () => clientClose(client));
});

server.sendAll = data => {
  server.clients.forEach(client => client.send(JSON.stringify(data)));
};

export function sendALL(data) {
  server.sendAll(data);
}

if (server) {
  debug('WS Server listening on port', PORT);
}
