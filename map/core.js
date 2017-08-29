function multiplyBy10 (array) {
    return array.map(function(el){
      return el*10;
    })
};

function shiftRight (array) {
  let last = array[array.length-1];
  return array.map(function(el,indx,arr){
    if(indx == 0){
      return last
    }
    else{
      return arr[indx-1]
    }
  })
};

function onlyVowels (array) {
 var vowel = ['a','e','i','o','u']
 return array.map(function(el,indx,arr){
   let current = el.split('')
   return current.map(function(ell){
     if(vowel.includes(ell)){
       return ell
     }
   }).join('')

 })
};

function doubleMatrix (array) {
 return array.map(function(el,indx,arr){
   return el.map(function(el){
     return el*2;
   })
 })
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
