function getIndexToIns(arr,num){
  arr.sort((a,b)=>a-b);
  let index = arr.findIndex((el)=>el >= num);
  return index==-1 ? arr.length:index;
}

console.log(getIndexToIns([40,60]),50);