function isLeapYear(year) {
  if (year % 400 === 0) {
    return `${year} is a leap year.`;
  } else if (year % 100 === 0) {
    return `${year} is not a leap year.`;
  } else if (year % 4 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// Example usage:
let year = 2024;
const result = isLeapYear(year);
console.log(result); // Output: 2024 is a leap year.

year = 2000;
console.log(isLeapYear(year)); // Output: 2000 is a leap year.

year = 1900;
console.log(isLeapYear(year)); // Output: 1900 is not a leap year.
