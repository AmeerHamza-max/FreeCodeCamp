function whatIsInAName(arr, obj) {

  let result = [];

  for(let item of arr){

    let isMatch = true;

    for(let key in obj){

      if(item[key] !== obj[key]){
        isMatch = false;
      }

    }

    if(isMatch){
      result.push(item);
    }

  }

  return result;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);