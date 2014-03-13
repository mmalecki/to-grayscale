# to-grayscale
Take an RGB buffer with specified depth and turn it into a grayscale one.

## Installation
```sh
npm install to-grayscale
```

## Usage

[`v4l2camera`](https://github.com/bellbind/node-v4l2camera) example:

```js
var fs = require('fs');
var v4l2camera = require('v4l2camera');
var toGrayscale = require('to-grayscale');

var cam = v4l2camera.Camera('/dev/video0');
cam.configSet({ width: 1280, height: 720 });
cam.start();

cam.capture(function () {
  var rgb = cam.toRGB();
  var grayscale = toGrayscale(new Buffer(rgb));

  fs.writeFile('camera.gray', grayscale);
});
```
