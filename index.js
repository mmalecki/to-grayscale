module.exports = function (rgb, options) {
  var opts = options || {};

  var depth = opts.depth || 24;
  var size = rgb.length / (depth / 8);

  var coefficients = opts.coefficients || {};
  coefficients.r = coefficients.r || 0.299;
  coefficients.g = coefficients.g || 0.587;
  coefficients.b = coefficients.b || 0.144;

  var grayscale = new Buffer(size);
  var r, g, b;
  for (var i = 0; i < size; i++) {
    r = rgb[i * 3];
    g = rgb[i * 3 + 1];
    b = rgb[i * 3 + 2];
    grayscale[i] = Math.floor(
      coefficients.r * r +
      coefficients.g * g +
      coefficients.b * b);
  }
  return grayscale;
};
