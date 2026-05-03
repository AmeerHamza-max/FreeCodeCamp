function uniteUnique(...args){
  let arr3 = [];
  for(const arg of args){
    for(const el of arg){
      if(!arr3.includes(el)){
        arr3.push(el);
      }
    }
  }
  return arr3;
  // return arr3;
}
console.log(uniteUnique([1, 2, 4], [2, 3, 5]))