// canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// images vars
// berry and x =? true or false
var berryX = 13;
var berryY = 160;

var
  body = new Image(),
  armL = new Image(),
  armR = new Image(),
  berries = new Image();
  berries.src = 'img/other/berry-editor.png'
  armL.src = 'img/player-arm-left.png'
  armR.src = 'img/player-arm-right.png'
  body.src = 'img/player-head.png'
// divs vars
var count = document.getElementById('count');
count.style.borderBottom = 'gray 2px solid'
var items = 0
count.textContent = items


// position vars
var
  xL = 60;
  xR = 0;
  yL = 30;
  yR = 30;
  x = 15,
  y = 0;
  var keyW = false;
  var keyA = false;
  var keyS = false;
  var keyD = false;
//functions
window.addEventListener('mousedown', armsDo);
window.addEventListener('mouseup', armsUp)

window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);
function onKeyUp(event) {
  var keyCode = event.keyCode;

  switch (keyCode) {
    case 68: //d
      keyD = false;
      break;
    case 83: //s
      keyS = false;
      break;
    case 65: //a
      keyA = false;
      break;
    case 87: //w
      keyW = false;
      break;
  }
}
var whichOne;
function armsDo() {
  function random(xx,yy) {
    return Math.random() * (xx - yy) + yy;
  }
whichOne = random(1,3)
    if(whichOne < 2) {
      if(xR < berryX & yR > berryY) {
        items++;
      }
      yR = yR + 10;
      xR = xR + 7;
    } else {
      if(xL < berryX & yL > berryY) {
        items++;
      }
      yL = yL + 10;
      xL = xL - 7;
    }

}
function armsUp() {
  if(whichOne < 2) {
    yR = yR - 10;
    xR = xR - 7;
  } else {
    yL = yL - 10;
    xL = xL + 7;
  }
}
function onKeyDown(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 68: //d
      keyD = true;
      break;
    case 83: //s
      keyS = true;
      break;
    case 65: //a
      keyA = true;
      break;
    case 87: //w
      keyW = true;
      break;
  }
}
function drawStuff() {
  window.requestAnimationFrame(drawStuff);

  ctx.clearRect(0, 0, 250, 250);
  ctx.drawImage(body, x, y, 50, 50);
  ctx.drawImage(armL, xL, yL, 20, 20);
  ctx.drawImage(armR, xR, yR, 20, 20);
  ctx.drawImage(berries, -50, 150)

  // true or false


  // true or false other
  if(x<0) {
    x = 15;
    xL = 60
    xR = 0;
  }
  if(x>200) {
    x = 150;
    xL = 195
    xR = 135;
  }
  if(y > 210) {
    y = 190;
    yL = 220;
    yR = 220;
  }
  if(y < 0) {
    y = 10;
    yL = 40;
    yR = 40;
  }
  if(x > 0) {
    ctx.font = 'bold 24px serif';
    ctx.fillStyle = 'magenta';
    ctx.fillText('taming.exe?',50,15);
  }
  if(x> 1) {
    ctx.font = 'italic 14px fantasy'
    ctx.fillStyle = 'gray'//rainbow(red,yellow,black,green,cyan,blue)
    ctx.fillText('Made by xTime', 100,240)
  }

  if (keyD == true) {
    x += 1;
    xL += 1;
    xR += 1;
  }
  if (keyS == true) {
    y += 1;
    yL += 1;
    yR += 1;
  }
  if (keyA == true) {
    x--;
    xL--;
    xR--;
  }
  if (keyW == true) {
    y--;
    yL--;
    yR--;
  }
}
window.requestAnimationFrame(drawStuff);
