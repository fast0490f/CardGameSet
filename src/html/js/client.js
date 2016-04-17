const server = new WebSocket(`ws://${location.hostname}:9000`);

function send(data) {
  server.send(JSON.stringify(data));
}

server.onopen = () => {
  send({ action: 'user', name: 'test' });
};

function message(mes) {
  if (stage.children) stage.removeChildren(0, stage.children.length);
  mes.forEach((game, i) => {
    stage.addChild(setCard(i, game.ob[0], game.ob[1], game.ob[2], game.ob[3]));
  });
}

server.onmessage = mes => {
  message(JSON.parse(mes.data));
};
