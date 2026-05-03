function sumAll(arr){
  for(let i = 0 ; i < arr.length; i ++){
    let result = 0;
    let max = arr[1];
    let min = arr[0];
    if(min < max){
    
      for(let j = min; j <= max;j++){
        result += j;
      }

    }
    else{
      for(let j = max; j <= min;j++){
        result += j;
      }
    }
    return result ;
    
  }
}
console.log(sumAll([4, 1]))