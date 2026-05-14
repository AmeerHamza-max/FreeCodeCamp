
function smallestCommons(arr) {

  // chota aur bara number nikaal lo
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  // largest number se start karo
  let candidate = max;

  while (true) {

    let divisibleByAll = true;

    // range check karo
    for (let i = min; i <= max; i++) {

      if (candidate % i !== 0) {
       
        divisibleByAll = false;
        break;
      }
    }

    // agar sab se divisible hai to answer return
    if (divisibleByAll) {
      return candidate;
    }

    // next multiple try karo
    candidate += max;
  }
}

console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1])); // 60