//properties
// 1.length
const arr = [10, 20, 30];
console.log(arr.length);  // 3
//can expand length
fruits.length = 2;
console.log(fruits);  // Output: ["apple", "banana"]

fruits.length = 5;
console.log(fruits);  // Output: ["apple", "banana", undefined, undefined, undefined]

// 2.constructor
const arrr = [1, 2, 3];
console.log(arrr.constructor);  

// 3.prototype
Array.prototype.sayHello = function() {
  console.log("Hello from array!");
};

const numbers = [1, 2, 3];
numbers.sayHello();  // Output: Hello from array!

//array methods
// 1.push
const fruitss = ["apple", "banana"];
fruitss.push("cherry");
console.log(fruitss);  // ["apple", "banana", "cherry"]

// 2.pop
const fruitsss = ["apple", "banana", "cherry"];
const last = fruitsss.pop();
console.log(last);    // "cherry"
console.log(fruitsss);  // ["apple", "banana"]

// 3.shift(remove from begining)
const fruits = ["apple", "banana", "cherry"];
const first = fruits.shift();
console.log(first);   // "apple"
console.log(fruits);  // ["banana", "cherry"]

// 4. unshift(add from begining)
const fruits = ["banana", "cherry"];
fruits.unshift("apple");
console.log(fruits);  // ["apple", "banana", "cherry"]

//5.indexOf
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.indexOf("banana"));  // 1
console.log(fruits.indexOf("grape"));   // -1 (not found)


//6.slice
const fruits = ["apple", "banana", "cherry", "date"];
const newFruits = fruits.slice(1, 3);
console.log(newFruits);  // ["banana", "cherry"]

//7.splice
const fruits = ["apple", "banana", "cherry", "date"];
// Remove 1 element at index 2, add "kiwi"
fruits.splice(2, 1, "kiwi");
console.log(fruits);  // ["apple", "banana", "kiwi", "date"]

