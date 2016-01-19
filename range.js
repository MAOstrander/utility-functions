module.exports = function (start, length) {
  var array = [];

  if(!length) {
    var length = start
    var i = 0;
  } else {
    var i = start;
  }

  for (i; i<length; i++) {
    array.push(i);
  }


  return array;

  // if (length) {
  // return new Array(length);
  // } else {
  // return [];
  // }
}
