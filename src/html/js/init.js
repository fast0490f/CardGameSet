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
  if (data.target.alpha === 0.7){
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


function addli(users, b, count) {
   document.getElementById('bar').innerHTML = '';
  console.log(count);

  for(var index in users) {
    if (count[index]  == undefined){
      count[index] = 0;
    }
    if (b[index]){
      const x = document.createElement('LI');
      x.className = "false";
      var p = document.createElement("P");
      const t = document.createTextNode(users[index] + ' ('+count[index]+')');
      p.appendChild(t);
      x.appendChild(p);
      document.getElementById('bar').appendChild(x);
    }else{
      const x = document.createElement('LI');
      x.className = "true";
      var p = document.createElement("P");
      var _p = document.createElement("P");
      const t = document.createTextNode(users[index] + ' ('+ count[index] +')');
      p.appendChild(t);
      x.appendChild(p);
      document.getElementById('bar').appendChild(x);
    }

  }




}
