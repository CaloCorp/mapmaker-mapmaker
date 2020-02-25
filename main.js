function doubleAll() {
}

function absoluteValues() {
}

function yelledGreetings() {
}

function changeToInitials() {
}

function doubleOdd() {
}

function upperCaseFirstLetters(words) {
  const uppercased = [];
  
  for (let i=0; i < words.length; i++){
    
    const word = words[i];
    
    const upper = word[0].toUpperCase() + word.slice(1).toLowerCase();
    
    uppercased.push(upper);
    
  }
  return uppercased
}
function add1ToLeft() {
}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}