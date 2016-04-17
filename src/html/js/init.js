const renderer = PIXI.autoDetectRenderer(
  window.innerWidth - 50,
  window.innerHeight - 10,
  { antialias: true, backgroundColor: 0x1099bb }
);

const stage = new PIXI.Container();


function init() {
  document.body.appendChild(renderer.view);

  /* point, _figure, _color, _paint, _quantity */
  stage.addChild(setCard(1, 1, 1, 1, 1));
  stage.addChild(setCard(2, 1, 2, 2, 2));
  stage.addChild(setCard(3, 1, 3, 3, 3));
  stage.addChild(setCard(4, 1, 2, 3, 1));

  stage.addChild(setCard(5, 2, 3, 3, 3));
  stage.addChild(setCard(6, 2, 1, 1, 1));
  stage.addChild(setCard(7, 2, 2, 2, 2));
  stage.addChild(setCard(8, 2, 1, 2, 3));

  stage.addChild(setCard(9, 3, 2, 2, 1));
  stage.addChild(setCard(10, 3, 3, 3, 1));
  stage.addChild(setCard(11, 3, 1, 1, 1));
  stage.addChild(setCard(12, 3, 3, 2, 1));




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
