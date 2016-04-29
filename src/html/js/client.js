const server = new WebSocket(`ws://${location.hostname}:9000`);

function send(data) {
  server.send(JSON.stringify(data));
}

server.onopen = () => {
  person = prompt("Please enter your name", "");
  send({ action: 'user', name: person });
};

function message(mes) {
  if (mes.action === 'game') {
    console.log(mes);
    if (stage.children) stage.removeChildren(0, stage.children.length);
    mes.game.forEach((game, i) => {
      stage.addChild(setCard(i, game[0], game[1], game[2], game[3]));
    });
  }

    if (mes.action === 'ban') {
      //alert(mes.user);
    }

    if (mes.action === 'user') {
      addli(mes.users, mes.ban , mes.count)

    }
}

server.onmessage = mes => {
  message(JSON.parse(mes.data));
};
