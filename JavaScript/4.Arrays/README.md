# JavaScript Arrays — Complete Master Guide 🚀

> Everything you need to know about JavaScript Arrays — from basics to advanced.

---

## 📌 Table of Contents

1. [What is an Array?](#1-what-is-an-array)
2. [Accessing Elements](#2-accessing-elements)
3. [length Property](#3-length-property)
4. [Updating Elements](#4-updating-elements)
5. [Two Dimensional Arrays](#5-two-dimensional-arrays)
6. [Array Destructuring](#6-array-destructuring)
7. [Common Array Methods](#7-common-array-methods)
8. [Higher-Order Array Methods ⭐](#8-higher-order-array-methods-)
9. [Array Sorting](#9-array-sorting)
10. [Flat & FlatMap](#10-flat--flatmap)
11. [Array.from & Array.of](#11-arrayfrom--arrayof)
12. [Finding Elements](#12-finding-elements)
13. [Chaining Methods](#13-chaining-methods)
14. [Common Patterns & Tricks](#14-common-patterns--tricks)
15. [Quick Reference Cheat Sheet](#15-quick-reference-cheat-sheet)

---

## 1. What is an Array?

A JavaScript array is an **ordered collection of values**, each identified by a numeric index. Arrays can store different data types — numbers, strings, booleans, objects, and even other arrays.

```js
const developers = ["Jessica", "Naomi", "Tom"];

// Mixed types are allowed
const mixed = [42, "hello", true, null, { name: "Ali" }, [1, 2]];
```

> 💡 Arrays are zero-based indexed — the first element is at index `0`.

---

## 2. Accessing Elements

```js
const developers = ["Jessica", "Naomi", "Tom"];

console.log(developers[0]);  // "Jessica"
console.log(developers[1]);  // "Naomi"
console.log(developers[10]); // undefined (index doesn't exist)
```

### Accessing the Last Element

```js
const fruits = ["apple", "banana", "orange"];

// Old way
console.log(fruits[fruits.length - 1]); // "orange"

// Modern way — .at() method (ES2022) ✅
console.log(fruits.at(-1)); // "orange"
console.log(fruits.at(-2)); // "banana"
```

---

## 3. length Property

Returns the total number of elements in an array.

```js
const developers = ["Jessica", "Naomi", "Tom"];
console.log(developers.length); // 3
```

---

## 4. Updating Elements

Use the assignment operator `=` to update any element by its index.

```js
const fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";

console.log(fruits); // ["apple", "blueberry", "cherry"]
```

---

## 5. Two Dimensional Arrays

A 2D array is an **array of arrays** — great for representing grids, tables, or boards.

```js
const chessboard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(chessboard[0][3]); // "Q"
```

Access format: `array[row][column]`

---

## 6. Array Destructuring

Extract values from an array and assign them to variables in a clean, readable way.

```js
const fruits = ["apple", "banana", "orange"];
const [first, second, third] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"
```

### Skipping Elements

```js
const [, second, , fourth] = ["a", "b", "c", "d"];
console.log(second); // "b"
console.log(fourth); // "d"
```

### Rest Syntax

Capture remaining elements into a new array.

```js
const fruits = ["apple", "banana", "orange", "mango", "kiwi"];
const [first, second, ...rest] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["orange", "mango", "kiwi"]
```

### Swap Variables (Cool Trick! 😎)

```js
let a = 1, b = 2;
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
```

---

## 7. Common Array Methods

### `push()` — Add to the end

```js
const desserts = ["cake", "cookies", "pie"];
desserts.push("ice cream");
console.log(desserts); // ["cake", "cookies", "pie", "ice cream"]
```

### `pop()` — Remove from the end

```js
const desserts = ["cake", "cookies", "pie"];
desserts.pop();
console.log(desserts); // ["cake", "cookies"]
```

### `shift()` — Remove from the beginning

```js
const desserts = ["cake", "cookies", "pie"];
desserts.shift();
console.log(desserts); // ["cookies", "pie"]
```

### `unshift()` — Add to the beginning

```js
const desserts = ["cake", "cookies", "pie"];
desserts.unshift("ice cream");
console.log(desserts); // ["ice cream", "cake", "cookies", "pie"]
```

### `indexOf()` — Find the first index of a value

```js
const fruits = ["apple", "banana", "orange", "banana"];
console.log(fruits.indexOf("banana"));    // 1
console.log(fruits.indexOf("not found")); // -1
```

### `splice()` — Add or remove elements anywhere

Syntax: `splice(startIndex, deleteCount, ...itemsToAdd)`

```js
const colors = ["red", "green", "blue"];

// Add elements at index 1, delete nothing
colors.splice(1, 0, "yellow", "purple");
console.log(colors); // ["red", "yellow", "purple", "green", "blue"]

// Remove 2 elements starting at index 1
const removed = colors.splice(1, 2);
console.log(removed); // ["yellow", "purple"]
console.log(colors);  // ["red", "green", "blue"]
```

### `includes()` — Check if a value exists

```js
const languages = ["JavaScript", "Python", "C++"];
console.log(languages.includes("Python")); // true
console.log(languages.includes("Perl"));   // false
```

### `concat()` — Merge arrays

```js
const arr1 = ["JavaScript", "Python"];
const arr2 = ["C++", "Rust"];
const merged = arr1.concat(arr2);
console.log(merged); // ["JavaScript", "Python", "C++", "Rust"]
```

### `slice()` — Extract a portion (non-mutating)

```js
const languages = ["JavaScript", "Python", "C++", "Rust", "Go"];

console.log(languages.slice(1));     // ["Python", "C++", "Rust", "Go"]
console.log(languages.slice(1, 3));  // ["Python", "C++"]
console.log(languages.slice(-2));    // ["Rust", "Go"]
```

### Spread Syntax — Shallow copy

```js
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);

console.log(original); // [1, 2, 3]  ✅ unchanged
console.log(copy);     // [1, 2, 3, 4]
```

### `split()` — Convert string to array

```js
const str = "hello";
console.log(str.split("")); // ["h", "e", "l", "l", "o"]

const sentence = "I love JavaScript";
console.log(sentence.split(" ")); // ["I", "love", "JavaScript"]
```

### `reverse()` — Reverse in place (mutates!)

```js
const desserts = ["cake", "cookies", "pie"];
console.log(desserts.reverse()); // ["pie", "cookies", "cake"]
```

### `join()` — Convert array to string

```js
const words = ["Hello", "World"];
console.log(words.join(" "));  // "Hello World"
console.log(words.join("-"));  // "Hello-World"
console.log(words.join(""));   // "HelloWorld"
```

---

## 8. Higher-Order Array Methods ⭐

> These are the most important array methods. They appear in almost every JavaScript interview and real-world project.

### `forEach()` — Loop through each element

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num * 2); // 2, 4, 6, 8, 10
});
```

### `map()` — Transform every element into a new array

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] ✅ original unchanged
```

**Real-world example:**

```js
const users = [{ name: "Ali" }, { name: "Sara" }, { name: "Ahmed" }];
const names = users.map((user) => user.name);
console.log(names); // ["Ali", "Sara", "Ahmed"]
```

### `filter()` — Keep only elements that match a condition

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8]
```

**Real-world example:**

```js
const products = [
  { name: "Shirt", price: 500 },
  { name: "Pants", price: 1500 },
  { name: "Shoes", price: 3000 },
];

const affordable = products.filter((p) => p.price < 2000);
console.log(affordable);
// [{ name: "Shirt", price: 500 }, { name: "Pants", price: 1500 }]
```

### `reduce()` — Combine all elements into a single value

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15
```

**Advanced example — count occurrences:**

```js
const votes = ["yes", "no", "yes", "yes", "no"];
const count = votes.reduce((acc, vote) => {
  acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});

console.log(count); // { yes: 3, no: 2 }
```

### `some()` — Does at least one element match?

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.some((num) => num > 4));  // true
console.log(numbers.some((num) => num > 10)); // false
```

### `every()` — Do all elements match?

```js
const numbers = [2, 4, 6, 8];
console.log(numbers.every((num) => num % 2 === 0)); // true
console.log(numbers.every((num) => num > 5));        // false
```

---

## 9. Array Sorting

### Default `sort()` — Alphabetical

```js
const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]
```

### Sorting Numbers — Always use a compare function!

```js
const numbers = [40, 1, 5, 200];

// ❌ Wrong — sorts as strings
numbers.sort();
console.log(numbers); // [1, 200, 40, 5]

// ✅ Ascending
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 40, 200]

// ✅ Descending
numbers.sort((a, b) => b - a);
console.log(numbers); // [200, 40, 5, 1]
```

### Sorting Objects

```js
const students = [
  { name: "Ali", grade: 85 },
  { name: "Sara", grade: 92 },
  { name: "Ahmed", grade: 78 },
];

students.sort((a, b) => b.grade - a.grade);
// Sara (92), Ali (85), Ahmed (78)
```

---

## 10. Flat & FlatMap

### `flat()` — Flatten nested arrays

```js
const nested = [1, [2, 3], [4, [5, 6]]];

console.log(nested.flat());         // [1, 2, 3, 4, [5, 6]]   (1 level)
console.log(nested.flat(2));        // [1, 2, 3, 4, 5, 6]     (2 levels)
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5, 6]     (all levels)
```

### `flatMap()` — Map + Flatten in one step

```js
const sentences = ["Hello World", "JavaScript is great"];
const words = sentences.flatMap((s) => s.split(" "));

console.log(words); // ["Hello", "World", "JavaScript", "is", "great"]
```

---

## 11. Array.from & Array.of

### `Array.from()` — Create array from any iterable

```js
console.log(Array.from("hello"));                        // ["h", "e", "l", "l", "o"]
console.log(Array.from({ length: 5 }, (_, i) => i + 1)); // [1, 2, 3, 4, 5]
console.log(Array.from(new Set([1, 2, 2, 3])));          // [1, 2, 3]
```

### `Array.of()` — Create array from values

```js
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of(7));       // [7]  (different from Array(7)!)
```

---

## 12. Finding Elements

### `find()` — First matching element

```js
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Ahmed" },
];

const user = users.find((u) => u.id === 2);
console.log(user); // { id: 2, name: "Sara" }
```

### `findIndex()` — Index of first matching element

```js
const numbers = [10, 20, 30, 40];
const idx = numbers.findIndex((n) => n > 25);
console.log(idx); // 2
```

### `findLast()` & `findLastIndex()` — Search from the end (ES2023)

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.findLast((n) => n % 2 === 0));      // 4
console.log(numbers.findLastIndex((n) => n % 2 === 0)); // 3
```

---

## 13. Chaining Methods

Chain multiple methods together for powerful, readable code:

```js
const students = [
  { name: "Ali", score: 45 },
  { name: "Sara", score: 92 },
  { name: "Ahmed", score: 78 },
  { name: "Zara", score: 88 },
  { name: "Bilal", score: 55 },
];

const topStudents = students
  .filter((s) => s.score >= 75)            // keep passing students only
  .sort((a, b) => b.score - a.score)       // sort by score (high to low)
  .map((s) => `${s.name}: ${s.score}`);    // format as string

console.log(topStudents);
// ["Sara: 92", "Zara: 88", "Ahmed: 78"]
```

---

## 14. Common Patterns & Tricks

### Remove duplicates

```js
const nums = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4]
```

### Check if array is empty

```js
const arr = [];
console.log(arr.length === 0); // true
```

### Sum of all numbers

```js
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((a, b) => a + b, 0);
console.log(sum); // 15
```

### Maximum & Minimum value

```js
const nums = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(Math.max(...nums)); // 9
console.log(Math.min(...nums)); // 1
```

### Split array into chunks

```js
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));
// [[1, 2], [3, 4], [5, 6]]
```

### Convert array to object

```js
const entries = [["name", "Ali"], ["age", 25]];
const obj = Object.fromEntries(entries);
console.log(obj); // { name: "Ali", age: 25 }
```

### Flatten & Remove falsy values

```js
const messy = [1, 0, false, "", 2, null, 3, undefined, 4];
const clean = messy.filter(Boolean);
console.log(clean); // [1, 2, 3, 4]
```

---

## 15. Quick Reference Cheat Sheet

| Method | Mutates Original? | Returns | Use For |
|---|---|---|---|
| `push()` | ✅ Yes | new length | Add to end |
| `pop()` | ✅ Yes | removed element | Remove from end |
| `shift()` | ✅ Yes | removed element | Remove from start |
| `unshift()` | ✅ Yes | new length | Add to start |
| `splice()` | ✅ Yes | removed elements | Add/remove anywhere |
| `sort()` | ✅ Yes | sorted array | Sort elements |
| `reverse()` | ✅ Yes | reversed array | Reverse order |
| `map()` | ❌ No | new array | Transform elements |
| `filter()` | ❌ No | new array | Filter by condition |
| `reduce()` | ❌ No | single value | Aggregate/combine |
| `slice()` | ❌ No | new array | Extract portion |
| `concat()` | ❌ No | new array | Merge arrays |
| `find()` | ❌ No | element / undefined | First match |
| `findIndex()` | ❌ No | index / -1 | Index of first match |
| `includes()` | ❌ No | boolean | Value exists? |
| `indexOf()` | ❌ No | index / -1 | Find index of value |
| `some()` | ❌ No | boolean | Any match? |
| `every()` | ❌ No | boolean | All match? |
| `flat()` | ❌ No | new array | Flatten nested arrays |
| `flatMap()` | ❌ No | new array | Map + Flatten |
| `forEach()` | ❌ No | undefined | Loop only |

---

## 🔑 Key Takeaways

- Arrays are **zero-indexed** — always start counting from `0`
- Some methods **mutate** the original array (`push`, `pop`, `sort`, `splice`) — be careful!
- `map`, `filter`, `reduce` are the **power trio** — master these first
- **Chaining methods** makes your code clean and professional
- Use **spread syntax** `[...arr]` to safely copy arrays without mutation

---

## 🎯 Practice Tasks

1. Create an array of 5 numbers and use `map()` to return their squares
2. Filter out all odd numbers from `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
3. Use `reduce()` to find the total price of a shopping cart array
4. Remove all duplicate values from `["a", "b", "a", "c", "b", "d"]`
5. Sort this array of objects by age (ascending): `[{name:"Ali", age:25}, {name:"Sara", age:22}, {name:"Ahmed", age:28}]`

---

> 💡 **Pro Tip:** `map`, `filter`, and `reduce` are the core of array mastery. Once you understand these three deeply, arrays become your superpower! 🎯