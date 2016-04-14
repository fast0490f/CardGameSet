const renderer = PIXI.autoDetectRenderer(
  window.innerWidth - 50,
  window.innerHeight - 10,
  { antialias: true, backgroundColor: 0x1099bb }
);

const stage = new PIXI.Container();

function init() {
  document.body.appendChild(renderer.view);

  stage.addChild(setCard(20 * 1  + (1-1) * 260, 20, 1));
  stage.addChild(setCard(20 * 2  + (2-1) * 260, 20, 1));
  stage.addChild(setCard(20 * 3  + (3-1) * 260, 20, 1));
  stage.addChild(setCard(20 * 4  + (4-1) * 260, 20, 1));

  stage.addChild(setCard(20 * 1  + (1-1) * 260, 2 * 20 + 140, 1));
  stage.addChild(setCard(20 * 2  + (2-1) * 260, 2 * 20 + 140, 1));
  stage.addChild(setCard(20 * 3  + (3-1) * 260, 2 * 20 + 140, 1));
  stage.addChild(setCard(20 * 4  + (4-1) * 260, 2 * 20 + 140, 1));

  stage.addChild(setCard(20 * 1  + (1-1) * 260, 3 * 20 + 140 *2, 1));
  stage.addChild(setCard(20 * 2  + (2-1) * 260, 3 * 20 + 140 *2, 1));
  stage.addChild(setCard(20 * 3  + (3-1) * 260, 3 * 20 + 140 *2, 1));
  stage.addChild(setCard(20 * 4  + (4-1) * 260, 3 * 20 + 140 *2, 1));

  stage.addChild(setCard(20 * 1  + (1-1) * 260, 4 * 20 + 140 *3, 1));
  stage.addChild(setCard(20 * 2  + (2-1) * 260, 4 * 20 + 140 *3, 1));
  stage.addChild(setCard(20 * 3  + (3-1) * 260, 4 * 20 + 140 *3, 1));
  stage.addChild(setCard(20 * 4  + (4-1) * 260, 4 * 20 + 140 *3, 1));


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
