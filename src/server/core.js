import { newGame } from './game.js';
import { playGame } from './game.js';

const users = [];

export function checkJSON(data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
}

function getUsers() {
  //console.log('-> ', users);
  return Object.keys(users).reduce((ob, i) =>
    ob.concat(
      [
        {
          name: users[i].name,
          block: users[i].block,
          score: users[i].score,
        },
      ])
  , []);
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

function getUsersCount() {
  return Object.keys(users).length;
}

function _newGame(client) {
  send(client, 'game', newGame());
}

function _playGame(client) {
  send(client, 'game', playGame());
}


function checkGame(client) {
  console.log(client._ultron.id);
  if (getUsersCount() === 0) {
    users.push(client);
    users[client] = {
      id: null,
      gameid: null,
      name: null,
      block: false,
      score: 0,
    };
    _newGame(client);
  } else {
    users.push(client);
    users[client] = {
      id: null,
      gameid: null,
      name: null,
      block: false,
      score: 0,
    };
    _playGame(client);
  }
}

function setUser(client, data) {
  users[client].name = data.name;
}


export function clientConnection(client) {
  checkGame(client);
}

export function clientSendMessage(client, data) {
    console.log(client._ultron.id);
  if (data !== null) {
    switch (data.action) {
      case 'user':
        setUser(client, data);
        break;
      default:
        console.log('WTF!');
    }
  }
}

export function clientClose(client) {
  console.log(users[client].name);
}
