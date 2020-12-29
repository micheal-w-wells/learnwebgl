var gl;

initGL();
draw();

function initGL() {
  var canvas = document.getElementById("canvas");
  console.dir(canvas)
  gl = canvas.getContext("webgl");
  gl.viewport(0, 0, canvas.clientWidth, canvas.clientHeight);
  gl.clearColor(1, 0, 0, 1);
}

function draw() { 
    gl.clear(gl.COLOR_BUFFER_BIT);
}
