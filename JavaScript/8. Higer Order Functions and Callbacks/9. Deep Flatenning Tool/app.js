function steamrollArray(arr) {

  let result = [];

  function flatten(currentArr) {

    for (let i = 0; i < currentArr.length; i++) {

      // agar element array hai to dubara function call karo
      if (Array.isArray(currentArr[i])) {
        flatten(currentArr[i]);
      } else {
        // warna direct result mein push karo
        result.push(currentArr[i]);
      }
    }
  }

  flatten(arr);

  return result;
}

console.log(steamrollArray([[["a"]], [["b"]]])); 
// ["a", "b"]

console.log(steamrollArray([1, [2], [3, [[4]]]])); 
// [1, 2, 3, 4]

console.log(steamrollArray([1, [], [3, [[4]]]])); 
// [1, 3, 4]

console.log(steamrollArray([1, {}, [3, [[4]]]])); 
// [1, {}, 3, 4]