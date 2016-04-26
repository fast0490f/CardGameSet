import { newGame } from './game.js';

const users = [];

export function checkJSON(data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
}

function getUsersCount() {
  return Object.keys(users).length;
}

function _newGame() {
  console.log(newGame());
}

function _playGame() {
  console.log('playGame');
}


function checkGame(client) {
  if (getUsersCount() === 0) {
    _newGame();
  } else {
    _playGame();
  }
  users[client] = {
    id: null,
    gameid: null,
    name: null,
    block: false,
    score: 0,
  };
}

function setUser(client, data) {
  users[client].name = data.name;
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
      default:
        console.log('WTF!');
    }
  }
}

export function clientClose(client) {
  console.log(users[client].name);
}
