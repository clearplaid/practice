// for each index check if ? if ? then make letter a-z
// if letter a-z leave it
// ?replacement cannot be the same letter as either side of ?
let riddle = "?????";
let before = '';
let after = '';
var answer = solution(riddle)
console.log({ answer })

function solution(riddle) {
  
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  let x = riddle.split(''); //empty string seperator
  
  // loop through each letter of the string
  for (let i = 0; i < x.length; i++) {
    
  
      // if the current index is a question mark- must replace with a letter not equal to the letter on either side of current index
    if (x[i] === "?") {
      
      // set before variable to the char before the current index
      if ((i > 0) && (i < x.length)) {
        before = x[i - 1];
      }
      
    // set after variable to the char after the current index
      if (i < (x.length - 1)) {
        after = x[i + 1];
      }
    
        // loop through alphabet to find replacement char for current index
      for (let j = 0; j < alpha.length; j++) {
        
          // if current alphabet letter not equal to before or not equal to after replace
          if ((alpha[j] !== before) && (alpha[j] !== after)) {
            x[i] = alpha[j];
            break;
          } 
        }
      }
  }
  return x.join('');
}


