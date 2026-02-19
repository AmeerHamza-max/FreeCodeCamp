# JavaScript Functions – Complete Notes

Functions are reusable blocks of code that perform a specific task. They help make code organized, modular, and maintainable.

---

## 1️⃣ Function Declaration

A function can be defined using the `function` keyword followed by:

* Function name
* Parameters (inside parentheses)
* Code block (inside curly braces)

```javascript
function addNumbers(x, y, z) {
  return x + y + z;
}

console.log(addNumbers(5, 3, 8)); // 16
```

### Key Points:

* **Parameters** are placeholders in the function definition.
* **Arguments** are actual values passed when calling the function.
* A function must be called to execute.

---

## 2️⃣ Return Statement

* The `return` keyword sends a value back.
* It immediately stops function execution.
* If no return is written, the function returns `undefined` by default.

```javascript
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Ameer")); // Hello Ameer
```

---

## 3️⃣ Default Parameters

Default parameters allow predefined values if no argument is provided.

```javascript
const calculateTotal = (amount, taxRate = 0.05) => {
  return amount + (amount * taxRate);
};

console.log(calculateTotal(100)); // 105
```

✔ Prevents errors when arguments are missing.

---

## 4️⃣ Function Expressions

Functions can be stored inside variables.

```javascript
const multiplyNumbers = function(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

console.log(multiplyNumbers(4, 5)); // 20
```

📌 Function expressions are **not hoisted** like function declarations.

---

## 5️⃣ Arrow Functions

Arrow functions provide a shorter syntax.

### Basic Arrow Function

```javascript
const calculateArea = (length, width) => {
  const area = length * width;
  return `The area of the rectangle is ${area} square units.`;
};
```

### Single Parameter (Parentheses Optional)

```javascript
const cube = x => {
  return x * x * x;
};
```

### Single Expression (Implicit Return)

```javascript
const square = number => number * number;
```

---

## 6️⃣ Differences: Regular vs Arrow Functions

| Feature        | Regular Function   | Arrow Function              |
| -------------- | ------------------ | --------------------------- |
| `this` keyword | Has its own `this` | Inherits `this` from parent |
| Hoisting       | Yes (declaration)  | No                          |
| Syntax         | Longer             | Shorter                     |

---

## 7️⃣ Scope in JavaScript

### 🔹 Global Scope

Variables declared outside any function.
Accessible everywhere.

```javascript
let globalVar = "I am global";
```

### 🔹 Local Scope

Variables declared inside a function.
Accessible only inside that function.

```javascript
function test() {
  let localVar = "I am local";
}
```

### 🔹 Block Scope

Variables declared with `let` or `const` inside `{}`.

```javascript
if (true) {
  let blockVar = "Block scoped";
}
```

❗ `var` does NOT follow block scope properly.

---

## 8️⃣ Function Hoisting

Function declarations are hoisted:

```javascript
sayHello();

function sayHello() {
  console.log("Hello!");
}
```

Function expressions are NOT hoisted.

---

## 9️⃣ Callback Functions

A function passed as an argument to another function.

```javascript
function greetUser(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greetUser("Ameer", sayBye);
```

---

## 🔟 Higher-Order Functions

A function that:

* Takes another function as an argument, OR
* Returns another function

Example:

```javascript
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

---

# 🚀 Summary

Functions help:

* Reuse code
* Improve readability
* Organize logic
* Reduce repetition

Important Concepts to Master:

* Parameters vs Arguments
* Return values
* Arrow functions
* Scope
* Hoisting
* Callbacks
* Higher-order functions

---

# 📚 Recommended Practice

* Build small calculator functions
* Practice array methods (`map`, `filter`, `reduce`)
* Create utility functions for projects

Mastering functions is essential for becoming a strong JavaScript developer 💻🔥
