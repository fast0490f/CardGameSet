const position = [];
position[0] = { x: 20, y: 20 };
position[1] = { x: 300, y: 20 };
position[2] = { x: 580, y: 20 };

position[3] = { x: 20, y: 180 };
position[4] = { x: 300, y: 180 };
position[5] = { x: 580, y: 180 };

position[6] = { x: 20, y: 340 };
position[7] = { x: 300, y: 340 };
position[8] = { x: 580, y: 340 };

position[9] = { x: 20, y: 500 };
position[10] = { x: 300, y: 500 };
position[11] = { x: 580, y: 500 };

position[12] = { x: 860, y: 20 };
position[13] = { x: 860, y: 180 };
position[14] = { x: 860, y: 340 };
position[15] = { x: 860, y: 500 };

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

  t.moveTo(3 + x, 8 + y);
  t.bezierCurveTo(0 + x, 23 + y, 24 + x, 25 + y, 9 + x, 53 + y);
  t.bezierCurveTo(4 + x, 62 + y, 4 + x, 101 + y, 47 + x, 97 + y);
  t.bezierCurveTo(58 + x, 96 + y, 60 + x, 88 + y, 51 + x, 80 + y);
  t.bezierCurveTo(38 + x, 67 + y, 47 + x, 51 + y, 52 + x, 39 + y);
  t.bezierCurveTo(67 + x, 0 + y, 10 + x, -5 + y, 3 + x, 6 + y);

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
  t.id = point;
  t.on('mousedown', test);
  t.on('touchstart', test);

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
