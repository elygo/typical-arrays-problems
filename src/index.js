
exports.min = function min (array) {
  if(array === undefined || array.length === 0){
    return 0;
  }
  var minval = 1000;
  for (var i=0; i < array.length; i++){
    if(array[i]<minval){
      minval = array[i]
    } else {

    }
  }
  return minval;
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0){
    return 0;
  };
  var maxval = 0;
  for(var i=0; i < array.length; i++){
    if (array[i] > maxval) {
      maxval = array[i];
    }
    else {

    }
  }
  return maxval;
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0){
    return 0;
  };
  var total = 0;
  for (var i=0; i < array.length; i++){
      total = total + array[i];
  }
  return total/array.length;
}
