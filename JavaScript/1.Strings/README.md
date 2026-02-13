# JavaScript String Basics

## What is a String?

A **string** is a sequence of characters wrapped in **single quotes (`'`)**, **double quotes (`"`)**, or **backticks (`` ` ``)**.

* Strings are **primitive data types**
* Strings are **immutable**, meaning once created, they **cannot be changed**

```js
const developer = "Jessica";
```

---

## Accessing Characters from a String

You can access characters using **bracket notation** with an index number.

* Indexes are **zero-based** (start from `0`)

```js
const developer = "Jessica";
console.log(developer[0]); // J
```

---

## Newline Character (`\n`)

You can create a new line inside a string using `\n`.

```js
const poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);
```

---

## Escaping Strings

Use a **backslash (`\`)** to escape quotes inside strings.

```js
const statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"
```

---

## Template Literals & String Interpolation

Template literals are created using **backticks (`)** and allow embedding variables directly inside strings.

```js
const name = "Jessica";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Jessica!
```

---

## ASCII & Character Codes

### ASCII

**ASCII** (American Standard Code for Information Interchange) assigns numeric values to characters.

### `charCodeAt()` Method

Returns the ASCII value of a character at a given index.

```js
const letter = "A";
console.log(letter.charCodeAt(0)); // 65
```

### `fromCharCode()` Method

Converts an ASCII code back into a character.

```js
const char = String.fromCharCode(65);
console.log(char); // A
```

---

## Common String Methods

### `indexOf()`

Returns the index of the first occurrence of a substring. Returns `-1` if not found.

```js
const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.indexOf("fox")); // 16
console.log(text.indexOf("cat")); // -1
```

---

### `includes()`

Checks if a string contains a specific substring.

```js
const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.includes("fox")); // true
console.log(text.includes("cat")); // false
```

---

### `slice()`

Extracts a portion of a string without modifying the original string.

```js
const text = "freeCodeCamp";
console.log(text.slice(0, 4));  // free
console.log(text.slice(4, 8));  // Code
console.log(text.slice(8, 12)); // Camp
```

---

### `toUpperCase()`

Converts all characters to uppercase.

```js
const text = "Hello, world!";
console.log(text.toUpperCase()); // HELLO, WORLD!
```

---

### `toLowerCase()`

Converts all characters to lowercase.

```js
const text = "HELLO, WORLD!";
console.log(text.toLowerCase()); // hello, world!
```

---

### `replace()`

Replaces the **first occurrence** of a value in a string.

```js
const text = "I like cats";
console.log(text.replace("cats", "dogs")); // I like dogs
```

---

### `replaceAll()`

Replaces **all occurrences** of a value in a string.

```js
const text = "I love cats and cats are so much fun!";
console.log(text.replaceAll("cats", "dogs"));
```

---

### `repeat()`

Repeats a string a specified number of times.

```js
const text = "Hello";
console.log(text.repeat(3)); // HelloHelloHello
```

---

### `trim()`

Removes whitespace from **both ends** of a string.

```js
const text = "  Hello, world!  ";
console.log(text.trim()); // Hello, world!
```

---

### `trimStart()`

Removes whitespace from the **start** of a string.

```js
const text = "  Hello, world!  ";
console.log(text.trimStart()); // Hello, world!  
```

---

### `trimEnd()`

Removes whitespace from the **end** of a string.

```js
const text = "  Hello, world!  ";
console.log(text.trimEnd()); //   Hello, world!
```

---

## `prompt()` Method

The `prompt()` method displays a dialog box that asks the user for input.

* First argument → message shown to the user
* Second argument → optional default value

```js
const answer = window.prompt("What's your favorite animal?");
```

---

✨ *Perfect for JavaScript beginners and README documentation.*
