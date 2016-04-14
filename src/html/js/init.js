const renderer = PIXI.autoDetectRenderer(
  window.innerWidth - 250,
  window.innerHeight - 20,
  { antialias: true, backgroundColor: 0x1099bb }
);

const stage = new PIXI.Container();

function init() {
  document.body.appendChild(renderer.view);


  stage.addChild(setCard(100, 100));


  function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
  }
  animate();
}

function test(data) {
  data.target.position.x += 5;
  data.target.position.y += 5;
}
