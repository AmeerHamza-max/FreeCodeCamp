

# Working with the Number Data Type in JavaScript

## Definition

JavaScript's `Number` type includes:

* Integers
* Floating-point numbers (numbers with a decimal point)
* `Infinity` and `-Infinity`
* `NaN` (Not a Number)

**Infinity** represents a number greater than any other number.
**-Infinity** represents a number smaller than any other number.
**NaN** represents an invalid numeric value, such as attempting to convert the string `"Jessica"` into a number.


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

If you divide by zero, JavaScript returns `Infinity`.

### Remainder Operator (`%`)

Returns the remainder of a division.

### Exponentiation Operator (`**`)

Raises one number to the power of another.

---

## Calculations with Numbers and Strings

### Key Rules

* `+` with a number and string → converts number to string (concatenation happens).
* `-`, `*`, `/` with string and number → converts string to number.
* `null` is treated as `0` in math operations.
* `undefined` is treated as `NaN`.

```js
const result = 5 + '10';
console.log(result); // "510"
console.log(typeof result); // string
```

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

Operator precedence defines execution order.

Rules:

* Parentheses execute first.
* Multiplication and division before addition and subtraction.
* Same precedence → associativity decides direction.

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

Associativity determines evaluation direction when operators share precedence.

* Most operators → left-to-right
* Exponentiation (`**`) → right-to-left

```js
const result4 = 5 ** 4 ** 1;
console.log(result4); // 625
```

---

## Increment and Decrement Operators

### Increment (`++`)

* Prefix: increments first
* Postfix: increments after returning value

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

### Decrement (`--`)

```js
let num = 5;
console.log(--num); // 4
console.log(num--); // 4
console.log(num); // 3
```

---

## Compound Assignment Operators

* `+=`
* `-=`
* `*=`
* `/=`
* `%=`
* `**=`

Example:

```js
let num = 10;
num += 5;
console.log(num); // 15
```

---

## Booleans and Equality

A Boolean has two values:

* `true`
* `false`

### Equality (`==`)

Performs type coercion.

```js
console.log(5 == '5'); // true
```

### Strict Equality (`===`)

Checks both value and type.

```js
console.log(5 === '5'); // false
```

### Inequality

* `!=` (loose)
* `!==` (strict)

---

## Comparison Operators

* `>`
* `>=`
* `<`
* `<=`

---

## Unary Operators

### Unary Plus

Converts value to number.

```js
const str = '42';
const num = +str;
console.log(num); // 42
console.log(typeof num); // number
```

### Unary Negation

```js
const num = 4;
console.log(-num); // -4
```

### Logical NOT

```js
console.log(!true); // false
console.log(!0); // true
```

---

## Bitwise Operators

* `&`
* `&=`
* `|`
* `|=`
* `^`
* `~`
* `<<`
* `>>`

---

## Conditional Statements

### if / else if / else

```js
const score = 87;

if (score >= 90) {
  console.log('You got an A');
} else if (score >= 80) {
  console.log('You got a B');
} else if (score >= 70) {
  console.log('You got a C');
} else {
  console.log('You failed');
}
```

---

## Ternary Operator

```js
const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';
console.log(`It's a ${weather} day!`);
```

---

## Logical Operators

### Logical AND (`&&`)

```js
const result = true && 'hello';
console.log(result); // hello
```

### Logical OR (`||`)

Returns first truthy value.

### Nullish Coalescing (`??`)

```js
const userSettings = {
  theme: null,
};

const theme = userSettings.theme ?? 'light';
console.log(theme); // light
```

---

## Math Object

* `Math.random()`
* `Math.max()`
* `Math.min()`
* `Math.ceil()`
* `Math.floor()`
* `Math.round()`
* `Math.trunc()`
* `Math.sqrt()`
* `Math.cbrt()`
* `Math.abs()`
* `Math.pow()`

```js
console.log(Math.round(4.8)); // 5
```

---

## Common Number Methods

### isNaN()

```js
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("NaN")); // false
```

### parseFloat()

Converts string to floating number.

### parseInt()

Converts string to integer (stops at first non-digit).

### toFixed()

Formats number to fixed decimal places.
Comparisons and the null and undefined Data Types
Comparisons and undefined: A variable is undefined when it has been declared but hasn't been assigned a value. It's the default value of uninitialized variables and function parameters that weren't provided an argument. undefined converts to NaN in numeric contexts, which makes all numeric comparisons with undefined return false.
console.log(undefined < 0); // false (NaN < 0 is false)
console.log(undefined >= 0); // false (NaN >= 0 is false)
Comparisons and null: The null type represents the intentional absence of a value. null converts to 0 in numeric contexts, which may result in unexpected behavior in numeric comparisons:
console.log(null < 0); // false (0 < 0 is false)
console.log(null >= 0); // true (0 >= 0 is true)
When using the equality operator (==), null and undefined only equal each other and themselves:
console.log(null == undefined); // true
console.log(null == 0); // false
console.log(undefined == NaN); // false
However, when using the strict equality operator (===), which checks both value and type without performing type coercion, null and undefined are not equal:
console.log(null === undefined); // false
switch Statements
Definition: A switch statement evaluates an expression and matches its value against a series of case clauses. When a match is found, the code block associated with that case is executed. A break statement should be placed at the end of each case, to terminate its execution and continue with the next. The default case is an optional case and only executes if none of the other cases match. The default case is placed at the end of a switch statement.
const dayOfWeek = 3; 

switch (dayOfWeek) {
  case 1:
    console.log("It's Monday! Time to start the week strong.");
    break;
  case 2:
    console.log("It's Tuesday! Keep the momentum going.");
    break;
  case 3:
    console.log("It's Wednesday! We're halfway there.");
    break;
  case 4:
    console.log("It's Thursday! Almost the weekend.");
    break;
  case 5:
    console.log("It's Friday! The weekend is near.");
    break;
  case 6:
    console.log("It's Saturday! Enjoy your weekend.");
    break;
  case 7:
    console.log("It's Sunday! Rest and recharge.");
    break;
  default:
    console.log("Invalid day! Please enter a number between 1 and 7.");
}





---

