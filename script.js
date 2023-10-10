// //A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
// //Z, C, J, U, D, X, G, P, K, Q, W, M, T, F, S, H, Y, A, B, V, N, E, I, O, L, R

// //the input is created using the new randomly substituted alphabet'
// //note, this code should be able to solve ANY random letter substitution

// // hello --> pdmms
// // world --> isamu

// //input phrase --> 'it is a good day today' --> 'kv kb z fkjd uzl vsuzl'

// let input = ['kv', 'kb', 'z', 'gssu', 'uzl', 'vsuzl']

// let wordDatabase = ['a', 'i', 'at', 'is', 'an', 'it', 'car', 'day', 'pay', 'road', 'nice', 'fume', 'pool', 'today', 'think', 'hello']
// //test 'dataBase'

// let sameLengthOutput = {}
// //output to an object

// function sameLength() {
//     for(i = 0; i < input.length; i++) {
//         sameLengthOutput[input[i]] = []
//         for(j = 0; j < wordDatabase.length; j++) {
//             if(input[i].length === wordDatabase[j].length)
//             // && sameRepeats is true -----> would be easier to only add values that are the same length && abide by repeating rules!!
//             {
//                 sameLengthOutput[input[i]].push(wordDatabase[j])
//             }
//         }
//     }

// //take the sameLengthOutput and make a new object 'characterRepeatOutput' that removes words with a different number of character repeats

//     return sameLengthOutput
// }

// function sameRepeats() {

//     let sameRepeatsOutput = {}

//     let repeatKey = false
//     let repeatVal = false

//     let repNum = 0

//     //check if there is a repeating character in the KEY, say 'gssu' (good)
//     //record how many times the character or characters repeat, and exactly at what index it repeats
//     //then compare the number of repeats in each VALUE for a given KEY
//     //if the number of repeats and their index match, add that value to the object

//     for (let [key, value] of Object.entries(sameLengthOutput)) {
//         console.log(key, value)

//         for(let i = 0; i < key.length; i++) {
//             for( let j = i + 1; j < key.length; j++) {
//                 if(key[i] === key[j]) {
//                     repeatKey = true
//                 }
//             }

//             for(j = 0; j < value.length; j++) {
//                 for( let j = i + 1; j < value.length; j++) {
//                     if(value[i] === value[j]) {
//                         repeatVal = true
//                     }
//                 }
//             }
//         }

//         if (repeatKey && repeatVal) {

//         }
//     }

// }

// console.log(sameLength())

// sameRepeats()

//TESTING:

const inputString = 'telltale';
const result = findRepeatingCharacters(inputString);
if (result) {
  for (const char in result) {
    const info = result[char];
    console.log(`Character '${char}' repeats ${info.count} times at positions ${info.positions.join(', ')}`);
  }
} else {
  console.log("No repeating characters found.");
}


function findRepeatingCharacters(inputString) {
    const charCount = {};
    const charPositions = {};
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (charCount[char]) {
        charCount[char]++;
        charPositions[char].push(i);
      } else {
        charCount[char] = 1;
        charPositions[char] = [i];
      }
    }
  
    const repeatingChars = {};
  
    for (const char in charCount) {
      if (charCount[char] > 1) {
        repeatingChars[char] = {
          count: charCount[char],
          positions: charPositions[char]
        };
      }
    }
  
    return Object.keys(repeatingChars).length > 0 ? repeatingChars : false;
  }
  
  

  





