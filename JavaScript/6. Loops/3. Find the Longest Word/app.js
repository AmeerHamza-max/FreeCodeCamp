function findLongestWordLength(str){
  let arr=str.split(" ");
  let max = 0;
  
  for(let i = 0 ; i < arr.length;i++){
    if(arr[i].length > max){
      max=arr[i].length;
    }

  }
  return max;
}
let find=findLongestWordLength("Hamza is very good boy");
console.log(find);