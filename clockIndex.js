function drawDial(ctx) {
  const pi = Math.PI;
  ctx.clearColor = '#eeeeee';
  ctx.clearRect(0,0,300,300);
  ctx.save();

  ctx.translate(150,150);
  ctx.beginPath();
  ctx.arc(0,0,148,0,2*pi);
  ctx.stroke();
  ctx.closePath();

  for(let i=0;i<60;i++){
    ctx.save();
    // ctx.rotate(-pi/2 + i*pi/30);
    ctx.rotate(i*pi/60);
    ctx.beginPath();
    ctx.moveTo(110,0);
    ctx.lineTo(140,0);
    ctx.lineWidth = i % 5 ? 2 : 4;
    ctx.strokeStyle = i % 5 ? 'blue' : 'red';
    ctx.stroke();
    ctx.closePath();
    ctx.restore;
  }
  ctx.restore();
}
function drawHand(angle,len,width,color,ctx) {
  ctx.save();
  ctx.translate(150.150);
  ctx.rotate(-Math.PI / 2 + angle);
  ctx.beginPath();
  ctx.moveTo(-4,0);
  ctx.lineTo(len,0);
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

function drawAllHnads(ctx) {
  let time = new Date();
  let s = time.getSeconds();
  let m = time.getMinutes();
  let h = time.getHours();

  let pi = Math.PI;
  let secondAngle = (pi / 180) * 6 * s; //计算出来s针的弧度
  let minuteAngle = (pi / 180) * 6 * m + secondAngle / 60; //计算出来分针的弧度
  let hourAngle = (pi / 180) * 30 * h + minuteAngle / 12; //计算出来时针的弧度

  drawHand(hourAngle, 60, 6, "red", ctx); //绘制时针
  drawHand(minuteAngle, 106, 4, "green", ctx); //绘制分针
  drawHand(secondAngle, 129, 2, "blue", ctx); //绘制秒针
}



function draw(ctx) {
  requestAnimationFrame(function step() {
    drawDial(ctx);
    // drawAllHnads(ctx);
    // requestAnimationFrame(step);
  })
}

function init() {
  let canvas = document.querySelector("#clock");
  let ctx = canvas.getContext("2d");
  draw(ctx);
}

init();