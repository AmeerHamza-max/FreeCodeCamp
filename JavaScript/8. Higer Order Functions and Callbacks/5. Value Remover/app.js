function destroyer(arr,...args){
  
    let filteredArray= arr.filter((el)=>{
      return !args.includes(el);
    })
    return filteredArray;
  
   
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));