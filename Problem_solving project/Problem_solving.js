// fizzBuzz function
function fizzBuzz(n) {
    if (typeof n !== 'number' || n <= 0 || n >= 100) {
        console.log('Error');
        return;
    }

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
// letterOccurence function
 function letterOccurrence(word) {
    // Check if the input is a string
    if (typeof word !== 'string') {
        console.log('Error');
        return;
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // Check if the string contains only alphabetical characters
    for (const letter of word){
        if (!alphabet.includes(letter.toLowerCase())) {
        console.log('Error');
        return;
    }}

    let letterCounts = {};

    for (let letter of word)
    {
      let lowerCaseLetter = letter.toLowerCase();
      if (letterCounts[lowerCaseLetter] !== undefined)
      {
        letterCounts[lowerCaseLetter]++;
      }
      else
      {
        letterCounts[lowerCaseLetter] = 1;
      }
    }
  
    return letterCounts;
  }
  

