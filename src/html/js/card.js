const position = [];
position[1] = { x: 20, y: 20 };
position[2] = { x: 300, y: 20 };
position[3] = { x: 580, y: 20 };
position[4] = { x: 860, y: 20 };
position[5] = { x: 20, y: 180 };
position[6] = { x: 300, y: 180 };
position[7] = { x: 580, y: 180 };
position[8] = { x: 860, y: 180 };
position[9] = { x: 20, y: 340 };
position[10] = { x: 300, y: 340 };
position[11] = { x: 580, y: 340 };
position[12] = { x: 860, y: 340 };
position[13] = { x: 20, y: 500 };
position[14] = { x: 300, y: 500 };
position[15] = { x: 580, y: 500 };
position[16] = { x: 860, y: 500 };

function figure(_figure, t, x, y) {
  switch (_figure) {
    case 1:
      t.moveTo(x + 0, y + 50);
      t.lineTo(x + 30, y + 0);
      t.lineTo(x + 60, y + 50);
      t.lineTo(x + 30, y + 100);
      break;

    case 2:
      t.drawRoundedRect(x + 0, y + 0, 60, 100, 29);
      break;

    case 3:
      t.moveTo(x + 0, y + 50);
      t.lineTo(x + 30, y + 0);
      t.lineTo(x + 60, y + 50);
      t.lineTo(x + 30, y + 100);
      break;
    default:
  }
}

function setCard(point, _figure, _color, _paint, _quantity) {


  let x = 0;
  let y = 0;

  const color = [];
  const paint = [];

  color[1] = '0xFF3333';
  color[2] = '0x0099CC';
  color[3] = '0xFFCC00';

  paint[1] = 0;
  paint[2] = 0.35;
  paint[3] = 1;


  const t = new PIXI.Graphics();
  t.interactive = true;
  t.click = data => test(data);

  t.beginFill(0xFFFFFF).lineStyle(2, 0x666633)
    .drawRoundedRect(0, 0, 260, 140, 15)
  .endFill();


  switch (_quantity) {
    case 1:
      x = 100; y = 20;
      t.beginFill(color[_color], paint[_paint]).lineStyle(2, color[_color]);
      figure(_figure, t, x, y);
      t.endFill();
      break;

    case 2:
      x = 60; y = 20;
      t.beginFill(color[_color], paint[_paint]).lineStyle(2, color[_color]);
      figure(_figure, t, x, y);
      t.endFill();

      x = 140; y = 20;
      t.beginFill(color[_color], paint[_paint]).lineStyle(2, color[_color]);
      figure(_figure, t, x, y);
      t.endFill();
      break;

    case 3:
      x = 20; y = 20;
      t.beginFill(color[_color], paint[_paint]).lineStyle(2, color[_color]);
      figure(_figure, t, x, y);
      t.endFill();

      x = 100; y = 20;
      t.beginFill(color[_color], paint[_paint]).lineStyle(2, color[_color]);
      figure(_figure, t, x, y);
      t.endFill();

      x = 180; y = 20;
      t.beginFill(color[_color], paint[_paint]).lineStyle(2, color[_color]);
      figure(_figure, t, x, y);
      t.endFill();
      break;
    default:
  }

  t.position.x = position[point].x;
  t.position.y = position[point].y;

  return t;
}
