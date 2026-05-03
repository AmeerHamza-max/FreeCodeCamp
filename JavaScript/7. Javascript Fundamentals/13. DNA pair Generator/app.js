function pairElement(str){
  let result = [];
  for(let ch of str){
    if(ch =='A'){
      result.push([ch,'T']);
    }
    if(ch =='T'){
      result.push([ch,'A']);
    }
    if(ch=='C'){
      result.push([ch,'G']);
    }
    if(ch=='G'){
      result.push([ch,'C'])
    }
    
  }
  return result;
}
console.log(pairElement("ATCGA"));