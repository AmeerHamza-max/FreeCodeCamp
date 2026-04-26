function findElement(arr,fnc){
for(let i = 0; i < arr.length; i++){
  if(fnc(arr[i])){
    return arr[i];
  }
  
}
  return undefined;
}
console.log(findElement([1, 3, 5, 8], num => num % 2 === 0)); // returns 8
findElement([1, 3, 5], num => num % 2 === 0)    