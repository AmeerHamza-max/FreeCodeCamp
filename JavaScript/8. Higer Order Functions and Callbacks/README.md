# JavaScript Callback Functions & Array Methods

## Table of Contents

- [Callback Functions](#callback-functions)
- [forEach() Method](#foreach-method)
- [Higher Order Functions](#higher-order-functions)
- [map() Method](#map-method)
- [filter() Method](#filter-method)
- [reduce() Method](#reduce-method)
- [Method Chaining](#method-chaining)
- [sort() Method](#sort-method)
- [every() Method](#every-method)
- [some() Method](#some-method)
- [Quick Reference Table](#quick-reference-table)

---

## Callback Functions

### Definition

Callback function ek aisi function hoti hai jo kisi doosri function ko **argument** ke tor par pass ki jati hai, aur wo tab execute hoti hai jab main function apna kaam poora kar leta hai.

### Key Points

- Callback function ko directly call nahi kiya jata — doosri function isko call karti hai
- Ye synchronous bhi ho sakti hai aur asynchronous bhi
- Arrow functions (`=>`) callback likhne ka sabse common tarika hai

### Example

```js
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // callback ko yahan call kiya gaya
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Ali", sayBye);
// Output:
// Hello, Ali
// Goodbye!
```

---

## forEach() Method

### Definition

`forEach()` array ke **har element par ek callback function** chalata hai. Ye `for` loop ka ek cleaner alternative hai. Ye koi naya array return **nahi** karta — sirf side effects ke liye use hota hai (jaise logging, DOM update, etc.).

### Syntax

```js
array.forEach((element, index, array) => {
  // code here
});
```

### Parameters (Callback ke andar)

| Parameter | Description |
|-----------|-------------|
| `element` | Current element jo process ho raha hai |
| `index`   | Current element ka index (optional) |
| `array`   | Original array jis par forEach call hua (optional) |

### Example — Basic

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
});

// Output: 2 4 6 8 10
```

### Example — Index ke saath

```js
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});

// Output:
// 1. Apple
// 2. Banana
// 3. Mango
```

### forEach vs for loop

```js
const nums = [10, 20, 30];

// Traditional for loop
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// forEach — zyada readable
nums.forEach((num) => console.log(num));
```

> ⚠️ **Note:** `forEach()` se `break` ya `continue` use nahi ho sakta. Iske liye regular `for` loop use karein.

---

## Higher Order Functions

### Definition

**Higher Order Function** wo function hota hai jo:
1. Ek ya zyada functions ko **argument** ke tor par leta hai, **ya**
2. Ek function ko **return** karta hai

### Example — Custom Higher Order Function

```js
function operateOnArray(arr, operation) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
  }
  return result;
}

function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

const numbers = [1, 2, 3, 4, 5];

console.log(operateOnArray(numbers, double));  // [2, 4, 6, 8, 10]
console.log(operateOnArray(numbers, square));  // [1, 4, 9, 16, 25]
```

### Example — Function Return karna

```js
function multiplier(factor) {
  return (number) => number * factor; // function return ho rahi hai
}

const triple = multiplier(3);
console.log(triple(5));  // 15
console.log(triple(10)); // 30
```

> JavaScript mein `map()`, `filter()`, `reduce()`, `forEach()` sab Higher Order Functions hain kyunki ye sabhi ek callback function accept karte hain.

---

## map() Method

### Definition

`map()` method array ke **har element par ek function apply** karke ek **naya array** banata hai. Original array bilkul change nahi hota.

### Syntax

```js
const newArray = array.map((element, index, array) => {
  return // transformed value
});
```

### Example — Numbers Double Karna

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log(numbers); // [1, 2, 3, 4, 5]  ← original unchanged
console.log(doubled); // [2, 4, 6, 8, 10] ← naya array
```

### Example — Strings Transform Karna

```js
const names = ["ali", "sara", "ahmed"];
const capitalized = names.map((name) => name.toUpperCase());

console.log(capitalized); // ["ALI", "SARA", "AHMED"]
```

### Example — Objects se Data Nikalna

```js
const users = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 30 },
  { name: "Ahmed", age: 22 },
];

const names = users.map((user) => user.name);
console.log(names); // ["Ali", "Sara", "Ahmed"]
```

### forEach vs map

| Feature | forEach | map |
|---------|---------|-----|
| Return value | `undefined` | Naya array |
| Original array | Change nahi hota | Change nahi hota |
| Use case | Side effects | Data transform karna |

---

## filter() Method

### Definition

`filter()` method wo elements select karta hai jo ek **diye gaye test (condition) ko pass** karen, aur un se ek **naya array** banata hai. Jo elements condition fail karen, wo result mein nahi aate.

### Syntax

```js
const newArray = array.filter((element, index, array) => {
  return // true ya false
});
```

### Example — Even Numbers

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
```

### Example — Specific Words Filter Karna

```js
const words = ["apple", "banana", "avocado", "blueberry", "apricot"];
const aWords = words.filter((word) => word.startsWith("a"));

console.log(aWords); // ["apple", "avocado", "apricot"]
```

### Example — Objects Filter Karna

```js
const students = [
  { name: "Ali", grade: 85 },
  { name: "Sara", grade: 45 },
  { name: "Ahmed", grade: 72 },
  { name: "Zara", grade: 38 },
];

const passed = students.filter((student) => student.grade >= 50);
console.log(passed);
// [{ name: "Ali", grade: 85 }, { name: "Ahmed", grade: 72 }]
```

---

## reduce() Method

### Definition

`reduce()` method pore array ko process karke ek **single value** mein badal deta hai. Ye value number, string, object, ya dusra array kuch bhi ho sakti hai.

### Syntax

```js
const result = array.reduce((accumulator, currentValue, index, array) => {
  return // updated accumulator
}, initialValue);
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `accumulator` | Running result — har step par update hota hai |
| `currentValue` | Current element jo process ho raha hai |
| `index` | Current element ka index (optional) |
| `array` | Original array (optional) |
| `initialValue` | Accumulator ki starting value |

### Example — Sum Nikalna

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 15
```

**Step-by-step breakdown:**

| Step | Accumulator | Current Value | Result |
|------|------------|---------------|--------|
| 1    | 0          | 1             | 1      |
| 2    | 1          | 2             | 3      |
| 3    | 3          | 3             | 6      |
| 4    | 6          | 4             | 10     |
| 5    | 10         | 5             | 15     |

### Example — Maximum Value Dhundhna

```js
const numbers = [3, 7, 1, 9, 4];
const max = numbers.reduce(
  (acc, curr) => (curr > acc ? curr : acc),
  numbers[0]
);

console.log(max); // 9
```

### Example — Array ko Object mein Convert Karna

```js
const fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 3, banana: 2, mango: 1 }
```

---

## Method Chaining

### Definition

Method Chaining ek technique hai jisme ek hi object ya array par **ek ke baad ek multiple methods** ko single line (ya multiple lines) mein call kiya jata hai. Ye code ko zyada readable aur concise banata hai.

### Kaise Kaam Karta Hai?

Har method apna result return karta hai, aur us result par agla method call hota hai.

### Example — String Methods

```js
const result = "  Hello, World!  "
  .trim()          // "Hello, World!"
  .toLowerCase()   // "hello, world!"
  .replace("world", "JavaScript"); // "hello, JavaScript!"

console.log(result); // "hello, JavaScript!"
```

### Example — Array Methods Chain

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
  .filter((num) => num % 2 === 0)    // [2, 4, 6, 8, 10]
  .map((num) => num * 3)             // [6, 12, 18, 24, 30]
  .reduce((acc, num) => acc + num, 0); // 90

console.log(result); // 90
```

### Example — Objects ke saath

```js
const students = [
  { name: "Ahmed", grade: 72 },
  { name: "Ali", grade: 85 },
  { name: "Sara", grade: 45 },
];

const topStudents = students
  .filter((s) => s.grade >= 70)  // passing students
  .map((s) => s.name)            // sirf naam
  .sort();                       // alphabetically sort

console.log(topStudents); // ["Ahmed", "Ali"]
```

> ✅ **Tip:** Method chaining mein order bohot zaroori hai — galat order galat result dega.

---

## sort() Method

### Definition

`sort()` method array ke elements ko **in-place** sort karta hai (matlab original array change ho jata hai) aur sorted array ka reference return karta hai. Koi naya array nahi banta.

### Default Behavior — Strings

By default, `sort()` elements ko **strings mein convert** karke unke UTF-16 code unit values compare karta hai.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
```

### ⚠️ Numbers ke saath Problem

```js
const numbers = [414, 200, 5, 10, 3];
numbers.sort(); // ❌ galat!

console.log(numbers); // [10, 200, 3, 414, 5]
// "200" < "3" kyunki "2" < "3" (string comparison hoti hai)
```

### Compare Function — Numbers ke liye

```js
const numbers = [414, 200, 5, 10, 3];

numbers.sort((a, b) => a - b); // Ascending order

console.log(numbers); // [3, 5, 10, 200, 414]
```

### Compare Function Logic

| Return Value | Matlab |
|-------------|--------|
| Negative (`a - b < 0`) | `a` pehle aayega |
| Positive (`a - b > 0`) | `b` pehle aayega |
| Zero (`a - b === 0`) | Order same rahega |

### Descending Order

```js
const numbers = [414, 200, 5, 10, 3];
numbers.sort((a, b) => b - a); // Descending

console.log(numbers); // [414, 200, 10, 5, 3]
```

### Objects Sort Karna

```js
const students = [
  { name: "Ahmed", grade: 72 },
  { name: "Ali", grade: 85 },
  { name: "Sara", grade: 45 },
];

// Grade ke hisaab se sort (ascending)
students.sort((a, b) => a.grade - b.grade);

console.log(students);
// [{ Sara, 45 }, { Ahmed, 72 }, { Ali, 85 }]
```

> ⚠️ **Note:** Original array change ho jata hai. Agar original bachana ho toh pehle copy banao: `[...array].sort()`

---

## every() Method

### Definition

`every()` method check karta hai ke array ke **sare elements** ek given test pass karte hain ya nahi.

- Agar **sab pass** karen → `true` return hoga
- Agar **koi ek bhi fail** kare → `false` return hoga aur checking foran ruk jati hai

### Syntax

```js
const result = array.every((element, index, array) => {
  return // true ya false
});
```

### Example — Sab Even Hain?

```js
const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every((num) => num % 2 === 0);

console.log(allEven); // true
```

### Example — Koi Fail Kare

```js
const numbers = [2, 4, 5, 8, 10];
const allEven = numbers.every((num) => num % 2 === 0);

console.log(allEven); // false (5 fail karta hai)
```

### Example — Age Verification

```js
const users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 19 },
  { name: "Ahmed", age: 25 },
];

const allAdults = users.every((user) => user.age >= 18);
console.log(allAdults); // true
```

---

## some() Method

### Definition

`some()` method check karta hai ke array mein **kam az kam ek element** ek given test pass karta hai ya nahi.

- Agar **koi ek bhi pass** kare → `true` return hoga aur checking foran ruk jati hai
- Agar **koi bhi pass na kare** → `false` return hoga

### Syntax

```js
const result = array.some((element, index, array) => {
  return // true ya false
});
```

### Example — Koi Even Hai?

```js
const numbers = [1, 3, 5, 7, 8, 9];
const hasEven = numbers.some((num) => num % 2 === 0);

console.log(hasEven); // true (8 pass karta hai)
```

### Example — Koi Bhi Pass Nahi

```js
const numbers = [1, 3, 5, 7, 9];
const hasEven = numbers.some((num) => num % 2 === 0);

console.log(hasEven); // false
```

### Example — Stock Check

```js
const products = [
  { name: "Laptop", inStock: false },
  { name: "Phone", inStock: true },
  { name: "Tablet", inStock: false },
];

const anyAvailable = products.some((product) => product.inStock);
console.log(anyAvailable); // true
```

### every vs some

| Method | Condition | Returns |
|--------|-----------|---------|
| `every()` | Sab elements pass karen | `true` / `false` |
| `some()` | Kam az kam ek pass kare | `true` / `false` |

```js
const nums = [2, 4, 6, 7, 8];

console.log(nums.every((n) => n % 2 === 0)); // false (7 fail karta hai)
console.log(nums.some((n) => n % 2 === 0));  // true  (2 pass karta hai)
```

---

## Quick Reference Table

| Method | Returns | Original Array | Use Case |
|--------|---------|---------------|----------|
| `forEach()` | `undefined` | Unchanged | Har element par koi kaam karna |
| `map()` | New array | Unchanged | Har element ko transform karna |
| `filter()` | New array | Unchanged | Condition ke hisaab se elements select karna |
| `reduce()` | Single value | Unchanged | Array ko ek value mein compress karna |
| `sort()` | Same array (sorted) | **Changed** | Elements sort karna |
| `every()` | `true` / `false` | Unchanged | Sab elements condition satisfy karte hain? |
| `some()` | `true` / `false` | Unchanged | Koi ek element condition satisfy karta hai? |

---

> 📌 **Yaad Rakho:** `map()`, `filter()`, `reduce()`, `forEach()`, `every()`, `some()` — ye sab **Higher Order Functions** hain kyunki ye callback functions accept karte hain.