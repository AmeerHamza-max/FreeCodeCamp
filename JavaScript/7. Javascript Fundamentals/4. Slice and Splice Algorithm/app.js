function frankenSplice(arr1,arr2,index){
  let result = [];
  let slice1 = arr2.slice(0,index)
  let slice2 = arr2.slice(index);
  result=([...slice1,...arr1,...slice2]);
  return result;
  
console.log(result);

  
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1))
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))
