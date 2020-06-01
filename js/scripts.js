// This is back-end code
function userSentence() {
  const words = prompt("Enter your sentence.");
  let firstLetter = words.charAt(0);
  let lastNumber = words.length;
  let lastLetter = words.charAt(lastNumber - 1);
  let newWords = firstLetter + lastLetter;
  return newWords.toUpperCase();
    
}

console.log(userSentence());


// let firstLetter = userSentence.charAt(0);
// // let lastLetter = userSentence.lastIndexOf();
// console.log(userSentence(firstLetter));




// prompt(words);


// this is front-end code
// $(document).ready(function(){
//   $(button).click(function);
//    
    
  // });

