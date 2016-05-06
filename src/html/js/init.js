let select = [];
let person;

const renderer = PIXI.autoDetectRenderer(
  document.documentElement.clientWidth - 250,
  document.documentElement.clientHeight,
  { antialias: true, backgroundColor: 0x1099bb }
);

const stage = new PIXI.Container();


function init() {
  document.body.appendChild(renderer.view);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
  }
  animate();
}


function test(data) {
  if (data.target.alpha === 0.7) {
    select.splice(select.indexOf(data.target.id), 1);
    data.target.alpha = 1;
  }else{
    if (select.length === 2) {
      data.target.alpha = 0.7
      select.push(data.target.id);
      send({ action: 'set', ob: select });
      stage.children[select[0]].alpha = 1;
      stage.children[select[1]].alpha = 1;
      stage.children[select[2]].alpha = 1;
      select = [];
    } else {
      data.target.graphicsData[0].lineColor = '0xFFCC00';
      select.push(data.target.id);
      data.target.alpha = 0.7
    }
  }

}


function addli(users) {
  document.getElementById('bar').innerHTML = '';


  for (var i in users) {

    if (users[i].block) {
      const x = document.createElement('LI');
      x.className = 'false';
      var p = document.createElement("P");
      const t = document.createTextNode(users[i].name + ' (' + users[i].score + ')');
      p.appendChild(t);
      x.appendChild(p);
      document.getElementById('bar').appendChild(x);
    }else{
      const x = document.createElement('LI');
      x.className = 'true';
      var p = document.createElement("P");
      const t = document.createTextNode(users[i].name + ' (' + users[i].score + ')');
      p.appendChild(t);
      x.appendChild(p);
      document.getElementById('bar').appendChild(x);
    }
  }
}
