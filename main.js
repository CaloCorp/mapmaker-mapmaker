function doubleAll(array) {
result = []

for(let i=0;i < array.length;i++){

  result.push(array[i]*2)
}
return result 
}

function absoluteValues(array) {

  result = []

  for (let i =0;i < array.length;i++){
    if (array[i]* -1 <= 0 ){

      result.push(array[i])
    }
    else if (array[i]* -1 >= 0){

      result.push(array[i] * -1)
    }
    
  }
  return result 
}

function yelledGreetings(array) {
 let result = []

  for(let i=0;i <array.length;i++){

    result.push(array[i] +'!')
  }

  return result  
}

function changeToInitials(array) {
  let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result =[]

  for(let i=0; i <array.length;i++){

    if(capitals.includes(array[i])){

      result.push(1)
    }
  }

  return result 
}

function doubleOdd(array) {

  let result =[]

  for(let i=0;i < array.length;i++){

   
   if(array[i] % 2 === 1 || array[i] % 2 === -1 ){

    result.push(array[i] * 2)
   }

   else
    result.push(array[i])
   

}
return result
}
function upperCaseFirstLetters(words) {
  const upperCased = [];
  
  for (let i=0; i < words.length; i++){
    
    const word = words[i];
    
    const upper = word[0].toUpperCase() + word.slice(1).toLowerCase();
    
    upperCased.push(upper);
    
  }
  return upperCased
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