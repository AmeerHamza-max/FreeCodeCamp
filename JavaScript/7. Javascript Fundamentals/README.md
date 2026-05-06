# JavaScript Core Concepts — Deep Reference Guide

> A structured reference for intermediate-beginner developers covering key JavaScript concepts with real examples, edge cases, and interview insights.

---

## Table of Contents

1. [Strings — Constructor & toString()](#1-strings--constructor--tostring)
2. [Number Constructor](#2-number-constructor)
3. [Naming Conventions — Variables & Functions](#3-naming-conventions--variables--functions)
4. [Sparse Arrays](#4-sparse-arrays)
5. [Linters & Formatters](#5-linters--formatters)
6. [Memory Management & Garbage Collection](#6-memory-management--garbage-collection)
7. [Closures](#7-closures)
8. [var, Hoisting & the Temporal Dead Zone](#8-var-hoisting--the-temporal-dead-zone)
9. [Modules — Imports & Exports](#9-modules--imports--exports)
10. [Practice Problems](#10-practice-problems)

---

## 1. Strings — Constructor & toString()

### Primitive vs Object String

JavaScript has two kinds of strings: **primitive** and **object**.

```js
const primitiveStr = "Hello";           // typeof → "string"
const objectStr = new String("Hello");  // typeof → "object"
```

> **Rule of thumb:** Always use primitive strings. String objects behave unexpectedly in comparisons and conditionals.

```js
// ⚠️ Gotcha with object strings
const a = new String("hi");
const b = new String("hi");

console.log(a === b); // false — they are two different objects in memory
console.log(a == b);  // false — still different references

// ✅ Primitive comparison works as expected
console.log("hi" === "hi"); // true
```

### toString()

Every value in JavaScript has a `.toString()` method. Its most powerful feature is the optional **radix** (base) parameter for numbers.

```js
// Basic conversion
(255).toString();    // "255"  → base 10 (default)
(255).toString(2);   // "11111111" → binary (base 2)
(255).toString(8);   // "377"  → octal (base 8)
(255).toString(16);  // "ff"   → hexadecimal (base 16)
```

**Why this matters in real code:**

```js
// Convert a decimal color value to CSS hex color
function toHexColor(r, g, b) {
  return "#" + r.toString(16).padStart(2, "0")
              + g.toString(16).padStart(2, "0")
              + b.toString(16).padStart(2, "0");
}

toHexColor(255, 99, 71); // "#ff6347" (Tomato Red)
```

**Other data types:**

```js
[1, 2, 3].toString();       // "1,2,3"  — joins with comma
true.toString();             // "true"
null.toString();             // ❌ TypeError — null has no methods
undefined.toString();        // ❌ TypeError — same
```

> **Interview edge case:** Why does `[1, [2, 3]].toString()` return `"1,2,3"` and not `"1,[2,3]"`?
> Because `toString()` recursively flattens nested arrays.

---

## 2. Number Constructor

### Two Uses: Object Creation vs Type Conversion

```js
// As a constructor (creates an object — avoid this)
const numObj = new Number("34");
console.log(typeof numObj); // "object"

// As a function (type conversion — use this)
const num = Number("34");
console.log(typeof num);    // "number"
console.log(num);           // 34
```

### Useful Number Properties

```js
Number.isNaN(NaN);          // true  — safer than global isNaN()
Number.isNaN("hello");      // false — unlike global isNaN("hello") → true ⚠️
Number.isFinite(1 / 0);     // false
Number.isInteger(3.0);      // true
Number.parseInt("42px");    // 42
Number.parseFloat("3.14x"); // 3.14
Number.MAX_SAFE_INTEGER;    // 9007199254740991
```

### toFixed() — Rounding for Display

```js
const price = 9.999;
console.log(price.toFixed(2)); // "9.99" — returns a STRING
```

> **Common mistake:** `toFixed()` returns a string, not a number. Wrap with `Number()` if you need to do math afterward.

```js
// ❌ Bug
const total = (1.005).toFixed(2) + 0.5; // "1.010.5" (string concat!)

// ✅ Fix
const total = Number((1.005).toFixed(2)) + 0.5; // 1.51
```

### Converting Other Types to Numbers

```js
Number(true);    // 1
Number(false);   // 0
Number(null);    // 0
Number("");      // 0
Number(" ");     // 0
Number("abc");   // NaN
Number(undefined); // NaN
Number([]);      // 0
Number([3]);     // 3
Number([1,2]);   // NaN
```

> These conversions are tested in almost every JavaScript interview.

---

## 3. Naming Conventions — Variables & Functions

Good naming is a form of documentation.

### camelCase — The Standard

```js
// Variables
let userAge = 25;
let productList = [];
let isLoggedIn = true;

// Functions
function getUserData() {}
function calculateTax(amount) {}
```

### Boolean Naming — Use Prefixes

```js
let isLoading = true;
let hasPermission = false;
let canEdit = true;
let wasDeleted = false;   // past tense for completed checks
let shouldRefetch = true; // "should" for decisions
```

### Function Naming Patterns

| Prefix    | Use case                        | Example                       |
|-----------|----------------------------------|-------------------------------|
| `get`     | Retrieve/return a value          | `getUserById(id)`             |
| `set`     | Update/mutate a value            | `setTheme("dark")`            |
| `is/has/can` | Returns boolean               | `isValidEmail(email)`         |
| `handle`  | Event handler                    | `handleSubmit(event)`         |
| `create`  | Factory / build new data         | `createUser(data)`            |
| `fetch`   | Async data from network          | `fetchProducts()`             |
| `format`  | Transform for display            | `formatDate(timestamp)`       |
| `on`      | React-style event prop           | `onClick`, `onChange`         |

### Constants — UPPER_SNAKE_CASE

```js
const MAX_RETRIES = 3;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_PAGE_SIZE = 20;
```

### Loop Variables

```js
// Simple loops: i, j, k are accepted and expected
for (let i = 0; i < arr.length; i++) {}

// But for clarity in nested or complex loops, be descriptive
for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
  for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {}
}
```

---

## 4. Sparse Arrays

A **sparse array** has "holes" — slots that exist in the length count but have no actual value (not even `undefined`).

```js
const sparse = [1, , , 4];
console.log(sparse.length); // 4
console.log(sparse[1]);     // undefined (reading it gives undefined)
console.log(1 in sparse);   // false — slot does NOT exist
console.log(3 in sparse);   // true  — index 3 (value 4) exists
```

### How Array Methods React to Holes

This is where it gets tricky — different methods treat holes differently:

```js
const arr = [1, , 3];

// These SKIP holes:
arr.forEach(x => console.log(x)); // 1, 3   (skips hole)
arr.map(x => x * 2);              // [2, empty, 6]
arr.filter(x => true);            // [1, 3]  (hole removed!)

// These DON'T skip holes:
Array.from(arr);    // [1, undefined, 3]
[...arr];           // [1, undefined, 3]
```

> **Why does this matter?** Accidentally creating sparse arrays leads to subtle bugs. `delete arr[1]` creates a hole — it does NOT set it to `undefined`.

```js
const arr = [1, 2, 3];
delete arr[1];

console.log(arr);        // [1, empty, 3]
console.log(arr.length); // 3 — length unchanged
console.log(1 in arr);   // false — slot gone
```

> **Best practice:** Use `arr[1] = undefined` if you want to "clear" a slot without creating a hole.

---

## 5. Linters & Formatters

### ESLint (Linter)

Catches **bugs and bad patterns** before you run the code.

```bash
npm install --save-dev eslint
npx eslint yourfile.js
```

Example: ESLint would flag this:

```js
if (x = 5) {}  // ⚠️ Assignment inside condition — probably a bug (should be ===)
```

### Prettier (Formatter)

Automatically **formats** your code for consistent style — indentation, quotes, semicolons, line length.

```bash
npm install --save-dev prettier
npx prettier --write yourfile.js
```

> **Team rule:** Use Prettier for formatting (style), ESLint for logic (errors). They complement each other.

### .eslintrc.json — Example Config

```json
{
  "env": { "browser": true, "es2021": true },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off",
    "eqeqeq": "error"
  }
}
```

---

## 6. Memory Management & Garbage Collection

### How JavaScript Manages Memory

JavaScript uses a **mark-and-sweep** garbage collector. Objects are automatically freed when no variable holds a reference to them.

```
Allocate → Use → (No more references?) → Garbage Collected
```

```js
function createUser() {
  const user = { name: "Ali" }; // Allocated in memory
  return user;
}

let u = createUser(); // "user" object is referenced by u — stays alive
u = null;             // Reference removed — object now eligible for GC
```

### Memory Leaks — What to Watch For

Even with GC, you can leak memory by accidentally keeping references alive:

**1. Forgotten event listeners:**

```js
// ❌ Leak — listener keeps the element alive even after removal from DOM
element.addEventListener("click", handleClick);

// ✅ Clean up when done
element.removeEventListener("click", handleClick);
```

**2. Global variables:**

```js
// ❌ Accidentally global — never gets collected
function setup() {
  leakedData = fetchBigData(); // Missing let/const/var
}
```

**3. Closures holding large data:**

```js
// ❌ bigArray is kept alive as long as the closure is referenced
function leaky() {
  const bigArray = new Array(1_000_000).fill("data");
  return () => bigArray[0]; // closure holds reference
}
```

> **Key insight:** GC is automatic, but understanding references helps you write memory-efficient code — especially in long-running apps.

---

## 7. Closures

### What is a Closure?

A closure is when an inner function **"remembers"** variables from its outer function, even after the outer function has finished running.

Think of it like a **backpack**: when the inner function is created, it packs up all the variables from its surrounding scope and carries them around.

```js
function outerFunction(x) {
  let y = 10;

  function innerFunction() {
    console.log(x + y); // "remembers" x and y
  }

  return innerFunction;
}

const closure = outerFunction(5);
closure(); // 15 — still has access to x=5 and y=10
```

### Real-World Uses of Closures

**1. Data privacy (encapsulation):**

```js
function createCounter() {
  let count = 0; // private — can't be accessed from outside

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.getCount();  // 2
console.log(count);  // ❌ ReferenceError — count is private
```

**2. Function factories:**

```js
function multiplier(factor) {
  return (number) => number * factor; // closes over `factor`
}

const double = multiplier(2);
const triple = multiplier(3);

double(5); // 10
triple(5); // 15
```

**3. Classic loop closure bug (and fix):**

```js
// ❌ Bug — all callbacks share the same `i` (var is function-scoped)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3

// ✅ Fix 1 — use let (block-scoped, new i per iteration)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2

// ✅ Fix 2 — use closure to capture current i
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
// Output: 0, 1, 2
```

> This loop bug is one of the most common JavaScript interview questions.

---

## 8. var, Hoisting & the Temporal Dead Zone

### var vs let vs const — The Key Differences

| Feature         | `var`         | `let`          | `const`        |
|----------------|---------------|----------------|----------------|
| Scope          | Function      | Block          | Block          |
| Hoisted?       | Yes (as `undefined`) | Yes (TDZ) | Yes (TDZ)  |
| Re-declarable? | ✅ Yes        | ❌ No          | ❌ No          |
| Re-assignable? | ✅ Yes        | ✅ Yes         | ❌ No          |

### var Scope Leaks Out of Blocks

```js
if (true) {
  var leaked = "I escape the block";
  let safe = "I stay inside";
}

console.log(leaked); // "I escape the block" ⚠️
console.log(safe);   // ❌ ReferenceError
```

### Hoisting — What Actually Happens

JavaScript separates your code into two phases:
1. **Compilation phase** — declarations are moved to the top
2. **Execution phase** — code runs line by line

**var hoisting:**

```js
// What you write:
console.log(name); // undefined (not an error!)
var name = "Ali";
console.log(name); // "Ali"

// What JavaScript actually does internally:
var name;           // declaration hoisted, initialized to undefined
console.log(name);  // undefined
name = "Ali";       // assignment stays here
console.log(name);  // "Ali"
```

**Function declaration hoisting:**

```js
// ✅ Works — entire function body is hoisted
greet(); // "Hello!"
function greet() {
  console.log("Hello!");
}

// ❌ Doesn't work — only the variable is hoisted, not the function
greet(); // TypeError: greet is not a function
var greet = function() {
  console.log("Hello!");
};
```

### Temporal Dead Zone (TDZ)

`let` and `const` are hoisted but NOT initialized. Accessing them before their declaration line throws a ReferenceError. The gap between hoisting and declaration is called the **Temporal Dead Zone**.

```js
console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 10;

// var doesn't have TDZ:
console.log(y); // ✅ undefined (not an error)
var y = 10;
```

```
Timeline for `let x = 10`:
|--- TDZ (x hoisted but not initialized) ---|--- x = 10 → accessible ---|
^ start of scope                             ^ declaration line
```

> **Interview tip:** `let` and `const` ARE hoisted — the key difference is they are not initialized, while `var` is initialized to `undefined`.

---

## 9. Modules — Imports & Exports

Modules let you split code into separate files and share only what you need.

### Named Exports & Imports

Use when exporting **multiple things** from a file. The name must match exactly.

```js
// math.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
```

```js
// app.js
import { PI, add, multiply } from './math.js';

// Rename during import
import { add as sum } from './math.js';
sum(2, 3); // 5
```

### Default Export & Import

Use when a file has **one main thing** to export. The import name can be anything.

```js
// logger.js
export default function log(message) {
  console.log(`[LOG]: ${message}`);
}
```

```js
// app.js
import logger from './logger.js';   // name can be anything
import myLog from './logger.js';    // also fine
logger("App started");
```

### Namespace Import — Import Everything

```js
import * as MathUtils from './math.js';

MathUtils.add(2, 3);      // 5
MathUtils.PI;             // 3.14159
MathUtils.default;        // access the default export too
```

### Common Module Patterns

**Re-exporting (index.js barrel pattern):**

```js
// utils/index.js — collects and re-exports everything
export { add, multiply } from './math.js';
export { formatDate } from './date.js';
export { capitalize } from './string.js';
```

```js
// Now you can import from one place
import { add, formatDate, capitalize } from './utils';
```

**Dynamic import (lazy loading):**

```js
// Load a module only when needed (great for performance)
async function loadChart() {
  const { ChartLibrary } = await import('./chart.js');
  ChartLibrary.render();
}
```

### Named vs Default — When to Use Which

| Scenario                         | Use            |
|----------------------------------|----------------|
| One main class/function per file | Default export |
| Multiple utilities in one file   | Named exports  |
| React components                 | Default export |
| Utility libraries (lodash-style) | Named exports  |

---

## 10. Practice Problems

### Beginner

1. **toString() Explorer** — Write a function `convertBase(num, base)` that returns the number in any base from 2–36, and throws an error if the base is out of range.

2. **Naming Practice** — Refactor this badly named code:
   ```js
   let x = true;
   function f(a) { return a * 1.1; }
   ```
   Rename variables and functions following best practices.

3. **Closure Counter** — Build a `createCounter(start, step)` function that returns `{ next, reset, current }` methods.

### Intermediate

4. **Hoisting Quiz** — Predict the output of this code WITHOUT running it, then verify:
   ```js
   console.log(a);
   var a = 1;
   function b() { return a; }
   console.log(b());
   let c = 2;
   console.log(c);
   ```

5. **Sparse Array Trap** — Given `[1, , 3, , 5]`, predict what `map`, `filter`, and `Array.from` return. Verify and explain why.

6. **Module Design** — Design a module structure for a shopping cart app. Decide which functions are named exports and which (if any) are default exports. Write the export signatures only.

### Advanced

7. **Closure Factory** — Implement a `memoize(fn)` function using closures that caches results of expensive function calls:
   ```js
   const memoizedFib = memoize(fib);
   memoizedFib(10); // calculated
   memoizedFib(10); // returned from cache
   ```

8. **Memory Leak Hunt** — Find and fix the memory leak in this event-driven code:
   ```js
   function attachListeners(elements) {
     elements.forEach(el => {
       const data = new Array(10000).fill("heavy");
       el.addEventListener("click", () => console.log(data.length));
     });
   }
   ```

### Challenge (Interview Level)

9. **Once Function** — Implement `once(fn)` — a function that wraps any function and ensures it can only be called once. Subsequent calls return the result of the first call.

   ```js
   const initialize = once(() => {
     console.log("Setup done!");
     return 42;
   });

   initialize(); // "Setup done!" → 42
   initialize(); // → 42 (no log, no re-run)
   initialize(); // → 42
   ```

---

## Key Takeaways

| Concept | Remember This |
|---------|---------------|
| String primitive vs object | Always use primitives; objects cause comparison bugs |
| `toString(radix)` | Convert numbers to any base — useful for binary/hex |
| `Number()` vs `new Number()` | Use without `new` for type conversion |
| Naming | Booleans: `is/has/can`; Functions: `get/set/handle/create` |
| Sparse arrays | `delete arr[i]` creates a hole, not `undefined` |
| `var` | Function-scoped, hoisted as `undefined`, avoid in modern JS |
| `let/const` TDZ | Hoisted but not initialized — ReferenceError if accessed early |
| Closures | Inner function remembers outer scope — used for privacy, factories, memoization |
| Module exports | Default = one main thing; Named = multiple utilities |

---

*Built for the 3-Month Software Engineer plan — consistency beats perfection.*