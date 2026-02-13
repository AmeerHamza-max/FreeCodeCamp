````md
# Working with the Number Data Type in JavaScript

## Definition
JavaScript's `Number` type includes:
- Integers  
- Floating-point numbers (numbers with a decimal point)  
- `Infinity` and `-Infinity`  
- `NaN` (Not a Number)

**Infinity** represents a number greater than any other number.  
**-Infinity** represents a number smaller than any other number.  
**NaN** represents an invalid numeric value, such as attempting to convert the string `"Jessica"` into a number.

---

## Common Arithmetic Operations

### Addition Operator (`+`)
Used to calculate the sum of two or more numbers.

### Subtraction Operator (`-`)
Used to calculate the difference between two numbers.

### Multiplication Operator (`*`)
Used to calculate the product of two or more numbers.

### Division Operator (`/`)
Used to calculate the quotient between two numbers.

### Division by Zero
If you try to divide by zero, JavaScript will return `Infinity`.

### Remainder Operator (`%`)
Returns the remainder of a division.

### Exponentiation Operator (`**`)
Raises one number to the power of another.

---

## Calculations with Numbers and Strings

### Explanation
- Using the `+` operator with a number and a string causes JavaScript to **coerce the number into a string** and concatenate the values.
- Using `-`, `*`, or `/` with a string and a number causes JavaScript to **coerce the string into a number**.
- `null` is treated as `0` in mathematical operations.
- `undefined` is treated as `NaN` in mathematical operations.

```js
const result = 5 + '10';

console.log(result); // "510"
console.log(typeof result); // string
````

```js
const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number
```

```js
const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number
```

```js
const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number
```

```js
const result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number
```

```js
const result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number
```

---

## Operator Precedence

### Definition

Operator precedence determines the order in which operations are evaluated in an expression.

* Parentheses are evaluated first
* Multiplication and division have higher precedence than addition and subtraction
* If operators have the same precedence, associativity is used

```js
const result = (2 + 3) * 4;
console.log(result); // 20
```

```js
const result2 = 10 - 2 + 3;
console.log(result2); // 11
```

```js
const result3 = 2 ** 3 ** 2;
console.log(result3); // 512
```

---

## Associativity

### Definition

Associativity determines the direction in which an expression is evaluated when operators of the same precedence are present.

* Left-to-right (left-associative)
* Right-to-left (right-associative)

The exponentiation operator (`**`) is right-associative:

```js
const result4 = 5 ** 4 ** 1;
console.log(result4); // 625
```

---

## Increment and Decrement Operators

### Increment Operator (`++`)

* Prefix: increments first, then returns the value
* Postfix: returns the value first, then increments

```js
let x = 5;

console.log(++x); // 6
console.log(x); // 6
```

```js
let y = 5;

console.log(y++); // 5
console.log(y); // 6
```

### Decrement Operator (`--`)

* Works the same way as the increment operator

```js
let num = 5;

console.log(--num); // 4
console.log(num--); // 4
console.log(num); // 3
```

---

## Compound Assignment Operators

* Addition Assignment (`+=`)
* Subtraction Assignment (`-=`)
* Multiplication Assignment (`*=`)
* Division Assignment (`/=`)
* Remainder Assignment (`%=`)
* Exponentiation Assignment (`**=`)

These operators perform the operation and assign the result to the variable.

---

## Booleans and Equality

### Boolean Definition

A boolean can only have two values: `true` or `false`.

### Equality Operator (`==`)

Uses type coercion before comparison.

```js
console.log(5 == '5'); // true
```

### Strict Equality Operator (`===`)

Does not use type coercion. Checks both type and value.

```js
console.log(5 === '5'); // false
```

### Inequality Operator (`!=`)

Uses type coercion.

### Strict Inequality Operator (`!==`)

Does not use type coercion.

---

## Comparison Operators

* Greater Than (`>`)
* Greater Than or Equal (`>=`)
* Less Than (`<`)
* Less Than or Equal (`<=`)

---

## Unary Operators

### Unary Plus (`+`)

Converts its operand into a number.

```js
const str = '42';
const num = +str;

console.log(num); // 42
console.log(typeof num); // number
```

### Unary Negation (`-`)

Negates the operand.

```js
const num = 4;
console.log(-num); // -4
```

### Logical NOT (`!`)

Flips the boolean value of its operand.

---

## Bitwise Operators

* Bitwise AND (`&`)
* Bitwise AND Assignment (`&=`)
* Bitwise OR (`|`)
* Bitwise OR Assignment (`|=`)
* Bitwise XOR (`^`)
* Bitwise NOT (`~`)
* Left Shift (`<<`)
* Right Shift (`>>`)

---

## Conditional Statements, Truthy & Falsy Values, and the Ternary Operator

### if / else if / else

Truthy values evaluate to `true` in a Boolean context.
Falsy values evaluate to `false`.

```js
const score = 87;

if (score >= 90) {
  console.log('You got an A');
} else if (score >= 80) {
  console.log('You got a B'); // You got a B
} else if (score >= 70) {
  console.log('You got a C');
} else {
  console.log('You failed! You need to study more!');
}
```

### Ternary Operator

A shorter alternative to `if...else`.

```js
const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`); // It's a sunny day!
```

---

## Binary Logical Operators

### Logical AND (`&&`)

Returns the second operand if both are truthy.
Returns the first falsy value otherwise.

```js
const result = true && 'hello';
console.log(result); // hello
```

### Logical OR (`||`)

Returns the first truthy operand.

### Nullish Coalescing (`??`)

Returns the right-hand value only if the left-hand value is `null` or `undefined`.

```js
const userSettings = {
  theme: null,
  volume: 0,
  notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light
```

---

## The Math Object

* `Math.random()` – Returns a random number between 0 (inclusive) and 1 (exclusive)
* `Math.max()` – Returns the maximum value
* `Math.min()` – Returns the minimum value
* `Math.ceil()` – Rounds up
* `Math.floor()` – Rounds down
* `Math.round()` – Rounds to the nearest integer

```js
console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5
```

* `Math.trunc()` – Removes the decimal part
* `Math.sqrt()` – Returns the square root
* `Math.cbrt()` – Returns the cube root
* `Math.abs()` – Returns the absolute value
* `Math.pow()` – Raises a number to a power

---

## Common Number Methods

### isNaN()

Checks whether a value is NaN.
`Number.isNaN()` is more reliable than the global `isNaN()`.

```js
console.log(isNaN(NaN));        // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false
```

```js
console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

console.log(Number.isNaN("NaN"));      // false
console.log(Number.isNaN(undefined));  // false
```

### parseFloat()

Parses a string and returns a floating-point number.

### parseInt()

Parses a string and returns an integer. Stops parsing at the first non-digit character.

### toFixed()

Formats a number using fixed-point notation and returns a string.

