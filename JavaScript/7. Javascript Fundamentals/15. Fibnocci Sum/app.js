function sumFibs(num){
  let t1 = 0;
  let t2 = 1;
  let sum = 0;
  let temp = 0;
  for (;t2 <= num;){
    if(t2%2!==0){
      sum=sum+t2;
    }
    temp=t1;
    t1=t2;
    t2=temp+t2; 
  }
  return sum;
}

console.log(sumFibs(1000))