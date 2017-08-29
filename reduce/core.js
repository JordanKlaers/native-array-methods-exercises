function sum (array) {
  return array.reduce(function(prev, current){
    return prev + current;

  })
};

function productAll (array) {
    return array.reduce(function(product, current){
      var result = '';
      if(typeof(current) == 'object'){
        var result = current.reduce(function(prev, curr){
           return prev*curr;
        },1);
      }
      return result * product;
    }, 1);
    };


function objectify (array) {
  // your code here
};

function luckyNumbers (array) {
  // your code here
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
