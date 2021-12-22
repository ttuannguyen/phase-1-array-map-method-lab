const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }


const titleCased = () => {
  return tutorials.map(string => string.split(' ')).map(function (word) {
    let result = [];
    for (let i = 0; i < word.length; i++) {
      result.push(word[i][0].toUpperCase() + word[i].substr(1));
    }
    return result.join(' ');
    })
}
console.log(titleCased(tutorials));
// let result = titleCased(tutorials);
// console.log(result);

// let map1 = tutorials.map(string => string.split(' '));
// let map2 = map1.map(function (word) {
//   let result = [];
//   for (let i = 0; i < word.length; i++) {
//     result.push(word[i][0].toUpperCase() + word[i].substr(1));
//   }
//   return result.join(' ');
//   })




// const titleCased = tutorials.map(
//   function capitalize (string) {
//     let words = string.split(' ');
//     let stringArray = [];
//     for (i = 0; i < words.length; i++) {
//       let firstOfString = words[i][0].toUpperCase();
//       let restOfString = words[i].substr(1);
//       stringArray.push(firstOfString + restOfString);
//     }
//     return stringArray.join(' ');
//   }
// )
// console.log(titleCased);


