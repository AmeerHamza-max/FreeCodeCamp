function pyramid(char, rows, isInverted) {
  let result = "\n";

  if (!isInverted) {
    // Normal pyramid
    for (let i = 0; i < rows; i++) {
      let spaces = " ".repeat(rows - i - 1);
      let chars = char.repeat(2 * i + 1);
      result += spaces + chars + "\n";
    }
  } else {
    // Inverted pyramid
    for (let i = rows - 1; i >= 0; i--) {
      let spaces = " ".repeat(rows - i - 1);
      let chars = char.repeat(2 * i + 1);
      result += spaces + chars + "\n";
    }
  }

  return result;
}

console.log(pyramid("o", 4, false));