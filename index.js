// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Appends a cat to the end of the array destructively
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Prepends a cat to the beginning of the array destructively
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Removes the last cat from the array destructively
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Removes the first cat from the array destructively
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Appends a cat to the array and returns a new array without modifying the original
function appendCat(name) {
  return [...cats, name];
}

// Prepends a cat to the array and returns a new array without modifying the original
function prependCat(name) {
  return [name, ...cats];
}

// Removes the last cat from the array and returns a new array without modifying the original
function removeLastCat() {
  return cats.slice(0, -1);
}

// Removes the first cat from the array and returns a new array without modifying the original
function removeFirstCat() {
  return cats.slice(1);
}