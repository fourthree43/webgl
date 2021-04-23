function main() {
  const id = document.getElementById("webgl");
  const gl = id.getContext("2d");
  gl.shadowOffsetX = 10;
  gl.shadowOffsetY = 10;
  gl.shadowBulr = 10;

  const grd = gl.createLinearGradient(0,0,200,0);
  grd.addColorStop(0,'red')
  grd.addColorStop(1,'white')
  gl.fillStyle = grd;

  const grdShadow = gl.createLinearGradient(0, 0, 200, 0);
  grdShadow.addColorStop(0, "#666666");
  grdShadow.addColorStop(1, "white");
  gl.shadowColor = grdShadow;

  gl.fillRect(50, 50, 100, 100);
}
function clearRegion(){
  const id = document.getElementById("webgl");
  const ctx = id.getContext("2d");
  ctx.clearColor = "blue";
  ctx.clearRect(0, 0, 400, 400);
}

function smiling() {
  const id = document.getElementById("webgl");
  const ctx = id.getContext("2d");
  const path = new Path2D();
  path.arc(300,100,100,0,Math.PI*2,true);
  path.moveTo(375, 100);
  path.arc(300,100,75,0,Math.PI,false);
  path.moveTo(260, 80);
  path.arc(250,80,10,0,Math.PI*2,true);
  path.moveTo(360, 80);
  path.arc(350,80,10,0,Math.PI*2,true);
  ctx.strokeStyle = 'blue';
  ctx.stroke(path);
}

function texting(params) {
  const id = document.getElementById("webgl");
  const ctx = id.getContext("2d");
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBulr = 2;
  ctx.shadowColor = '#666666';
  ctx.font = "24px Arial";
  ctx.fillStyle = "#333333";
  ctx.fillText('hello,world!',250,250)
}