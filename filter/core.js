function onlyEven (array) {
  return array.filter(function(el){
    if(el%2==0){
      return el;
    }
  })
};

function onlyOneWord (array) {
  return array.filter(function(el){
    return !el.includes(" ")
  })
};

function positiveRowsOnly (array) {
  return array.filter(function(el){
    let pos = true;
    for (var i = 0; i < el.length; i++) {
      if(el[i]<0){
        pos = false;
      }
    }
    if(pos) return el;
  })
};

function allSameVowels (array) {
  let vow = ["a","e","i","o","u"];
  return array.filter(function(el){
    let split = el.split('');
    let dup = [];
    for (var i = 0; i < split.length; i++) {
      if(vow.includes(split[i]) && !dup.includes(split[i])){
        dup.push(split[i]);
      }
    }
    if(dup.length == 1){
      return split.join('');
    }
  })
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
