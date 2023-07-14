// Function Declaration, to be called later
function scream (string) {
    string = string.toUpperCase() + "!!!"
    console.log(string)
  }
  
  scream('theres always money in the banana stand')
  // => THERES ALWAYS MONEY IN THE BANANA STAND!!!
  
  // Function Expressions, aka storing a function as a variable
  const yell = function (string) {
    string = string.toUpperCase() + '!'
    console.log(string)
  }
  yell('theres always money in the banana stand')
  // => THERES ALWAYS MONEY IN THE BANANA STAND!
  
  
  // ES6 arrow function expressions
  // Single line arrow functions explicitly return
  const whisper = (string) => string.toLowerCase() + '.'
  console.log(whisper('THERES ALWAYS MONEY IN THE BANANA STAND'))
  // => theres always money in the banana stand.
  
  // Multiline Arrow Function expressions need a return statement
  const insideVoices = (string) => {
    string = string.toLowerCase() + '.'
    return string
  }
  console.log(insideVoices('theres always money in the banana stand'))
  // => theres always money in the banana stand.