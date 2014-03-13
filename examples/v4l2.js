var fs = require('fs');
var v4l2camera = require('v4l2camera');
var toGrayscale = require('../');

var cam = v4l2camera.Camera('/dev/video0');
cam.configSet({ width: 1280, height: 720 });
cam.start();

cam.capture(function () {
  var rgb = cam.toRGB();
  var grayscale = toGrayscale(new Buffer(rgb));

  fs.writeFile('camera.gray', grayscale);
});
