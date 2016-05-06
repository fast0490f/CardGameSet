import { newGame } from './game.js';
import { playGame } from './game.js';
import { checkSet } from './game.js';
import { server } from './run.js';

const users = [];

export function checkJSON(data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
}

function getUsers() {
  return users.filter(ob => ob.active);
}

function send(client, type, data) {
  switch (type) {
    case 'game':
      client.send(JSON.stringify({ action: 'game', game: data, users: getUsers() }));
      break;
    default:
      console.log('!WTF!');
  }
}

function sendALL(type) {
  switch (type) {
    case 'users':
      server.sendAll({ action: 'users', users: getUsers() });
      break;
    default:
      console.log('!WTF!');
  }
}

function getUsersCount() {
  return users.filter(ob => ob.active).length;
}


function _newGame(client) {
  send(client, 'game', newGame());
}

function _playGame(client) {
  send(client, 'game', playGame());
  sendALL('users');
}


function checkGame(client) {
  if (getUsersCount() === 0) {
    users[client._ultron.id] = {
      gameid: null,
      name: null,
      block: false,
      score: 0,
      active: true,
    };
    _newGame(client);
  } else {
    users[client._ultron.id] = {
      gameid: null,
      name: null,
      block: false,
      score: 0,
      active: true,
    };
    _playGame(client);
  }
}

function setUser(client, data) {
  users[client._ultron.id].name = data.name;
  sendALL('users');
}

function checkblock(value) {
  if (value === 0) {
    users.forEach((ob, i) => {
      users[i].block = false;
    });
  }
}

function gameSet(client, data) {
  if (! users[client._ultron.id].block) {
    if (checkSet(data.ob)) {
      users[client._ultron.id].score += 1;
      checkblock(0);
    } else {
      users[client._ultron.id].block = true;
      checkblock(getUsers().filter(ob => ! ob.block).length);
    }
    sendALL('users');
  }
}


export function clientConnection(client) {
  checkGame(client);
}

export function clientSendMessage(client, data) {
  if (data !== null) {
    switch (data.action) {
      case 'user':
        setUser(client, data);
        break;
      case 'set':
        gameSet(client, data);
        break;
      default:
        console.log('WTF!');
    }
  }
}

export function clientClose(client) {
  users[client._ultron.id].active = false;
  sendALL('users');
}
