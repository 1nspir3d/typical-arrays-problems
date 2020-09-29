
exports.min = function min (array) {
  let minNumber;
    if (array === undefined || arguments.length === 0 || array.length === 0) {
        minNumber = 0;        
        return minNumber;
    } else {
        minNumber = array[0];
    }
      
  for (let i = 0; i < array.length; i++) {
      if (array[i] < minNumber) {
          minNumber = array[i];
      }
  }   
  return minNumber;
};

exports.max = function max (array) {
  let minNumber; 
    if ( array === undefined || arguments.length === 0 || array.length === 0) {
        minNumber = 0;
        return minNumber;
    } else {
        minNumber = array[0];
    }
      
  for (let i = 0; i < array.length; i++) {
      if (array[i] > minNumber) {
          minNumber = array[i];
      }
  }
  return minNumber;

};

exports.avg = function avg (array) {
  let minNumber = 0;
  if (array === undefined || arguments.length === 0 || array.length === 0) {
      minNumber = 0;
      return minNumber;
  }
  let i = 0;
  for (i; i < array.length; i++) {
      minNumber += array[i];
  }
  minNumber /= array.length;
  return minNumber;
};
