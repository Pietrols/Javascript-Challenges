// Challenge 01: Square Each Number
const input = [1, 2, 3, 4];
const squareInput = input.map((num) => num * 2);
console.log(squareInput);

//Challenge 02: Filter Out Even Numbers
const Input2 = [1, 2, 3, 4, 5, 6];
const filteredOdd = Input2.filter((num) => num % 2);
console.log(filteredOdd);

//Challenge 03: Convert Strings to Uppercase
const input3 = ["cat", "dog", "bird"];
const upperMap = input3.map((word) => word.toUpperCase());
console.log(upperMap);

//Challenge 04: Word Lengths
const input4 = ["pen", "notebook", "eraser"];
const wordLength = input4.map((word) => word.length);
console.log(wordLength);

//Challenge 05: Filter Short Words (Keep only words with 4+ characters)
const input5 = ["apple", "kiwi", "pear", "fig", "banana"];
const shortWords = input5.filter((word) => {
  if (word.length <= 4) return word;
});
console.log(shortWords);

//Challenge 06: Make first letter capital
const words = ["hello", "world", "javascript", "rocks"];
const caps = words.map((word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(caps);

//Challenge 07: Get Even Numbers
const numbers = [5, 8, 13, 22, 7, 10];
const evenOnly = numbers.filter((num) => num % 2 === 0);
console.log(evenOnly);

//Challenge 08: Remove Falsy Values
const mixed = [0, "hello", false, 42, "", undefined, "world"];
const mixing = mixed.filter((val) => val);
console.log(mixing);

//Challenge 09: Count Words Longer Than 4 Letters
const words2 = ["dog", "giraffe", "apple", "to", "elephant", "sun"];
const overFour = words2.filter((word) => {
  if (word.length > 4) return word;
});
console.log(overFour);

//Challenge 10: Find the First Number Over 100
const numbers2 = [10, 45, 99, 102, 130, 80];
const firstNum = numbers2.find((number) => number > 100);
console.log(firstNum);

//Challenge 11: Double Each Number
const numbers3 = [3, 5, 7, 9];
const doubles = numbers3.map((num) => num * 2);
console.log(doubles);

//Challenge 11: Reverse Strings
const words3 = ["cat", "dog", "banana"];
const reversed = words3.map((word) => {
  return word.split("").reverse().join("");
});
console.log(reversed);

//Challenge 12: Filter Words Ending in “ing”
const words4 = ["running", "jog", "walking", "talk", "playing"];
const ings = words4.filter((word) => {
  return word.includes("ing");
});
console.log(ings);

//Challenge 12: Flatten a Nested Array One Level. Description: Flatten an array one level deep.
const nested = [1, [2, 3], [4, 5], 6];
const flattenArray = nested.flat();
console.log(flattenArray);

// Challenge 13: Get Last Letters. Description: Return an array containing just the last letter of each word.
const words5 = ["hat", "apple", "monkey", "crate"];
const lastLetter = words5.map((word) => word.at(-1));
console.log(lastLetter);

//Challenge 13: Sum of All Numbers. Description: Return the sum of all numbers in the array using forEach.
const numbers4 = [10, 20, 30, 40];
const total = numbers4.reduce((currentTotal, num) => {
  return currentTotal + num;
});
let Total = 0;
const numm = numbers4.forEach((num) => {
  Total += num;
});
console.log(total);
console.log(Total);

//Challenge 14: Use forEach to Build a Sentence. Description: Use .forEach() to build a sentence from an array of words (as a single string).
const words6 = ["The", "sky", "is", "blue"];
const sentence = words6.join(" ");
console.log(sentence);

//Challenge 14: Toggle Button Text on Click. Description: When a button is clicked, toggle its text between “ON” and “OFF”.
//You’ll need to create a button in HTML and add a click event listener.

const button = document.createElement("button");
button.id = "toggle-btn";
button.textContent = "OFF";
document.body.appendChild(button);
button.addEventListener("click", (event) => {
  button.textContent = button.textContent === "OFF" ? "ON" : "OFF";
});

//Challenge 15: Return Only Truthy Numbers
const items = [0, "hello", 3, null, 8, NaN, undefined, 12, false];
const truthy = items.filter((item) => item);
console.log(truthy);

//Challenge 15: Count Vowels in Words. Description: Return an array with the count of vowels in each word.
const words7 = ["hello", "sky", "education", "why"];
const vowels = ["a", "e", "i", "o", "u"];

const countVowel = words7.map((word) => {
  let count = 0;
  word.split("").forEach((char) => {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  });
  return count;
});

console.log(countVowel); // [2, 0, 5, 0]
