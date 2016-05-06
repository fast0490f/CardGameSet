const server = new WebSocket(`ws://${location.hostname}:9000`);

function send(data) {
  server.send(JSON.stringify(data));
}

server.onopen = () => {
  const person = this.prompt('Please enter your name', '');
  send({ action: 'user', name: person });
};

function message(mes) {
  if (mes.action === 'game') {
    if (stage.children) stage.removeChildren(0, stage.children.length);
    mes.game.forEach((game, i) => {
      stage.addChild(setCard(i, game[0], game[1], game[2], game[3]));
      document.getElementById('count').innerHTML = 'SET found: ' + mes.count;
    });
  }

  if (mes.action === 'ban') {
    //alert(mes.user);
  }

  if (mes.action === 'users') {
    addli(mes.users);
  }
}

server.onmessage = mes => {
  message(JSON.parse(mes.data));
};
