module.exports = function(length) {
  var rangething = require('./range');
  var obj = {};

  rangething(length).reduce(function(previousValue, currentValue, currentIndex, array) {
    obj[currentValue] = currentValue;
  }, 0);

  return obj;
}
