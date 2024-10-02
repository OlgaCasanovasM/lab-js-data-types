/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister = "";
tongueTwister += s1;
tongueTwister += " " + s2;
tongueTwister += " " + s3;
tongueTwister += " " + s4;
tongueTwister += " " + s5;

// Print out the concatenated string

console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const part1Firstletter = part1.slice(0, 1);
const part2Firstletter = part2.slice(0, 1);
const part1Upper = part1Firstletter.toUpperCase();
const part2Upper = part2Firstletter.toUpperCase();
const part1Rest = part1.slice(1, part1.length);
const part2Rest = part2.slice(1, part2.length);

const fullWord = `${part1Upper}${part1Rest}${part2Upper}${part2Rest}`;

// Print the cameLtaiL-formatted string
console.log(fullWord);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipAmount = billTotal * (15 / 100);

// Print out the tipAmount

console.log(tipAmount);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomDecimal = Math.random();
const integerNum = randomDecimal.toFixed(1) * 10;

console.log(integerNum);

// Print the generated random number

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

// False

const expression2 = a || b;

// True

const expression3 = !a && b;

// False

const expression4 = !(a && b);

// True

const expression5 = !a || !b;

// True

const expression6 = !(a || b);

// False

const expression7 = a && a;

// True
