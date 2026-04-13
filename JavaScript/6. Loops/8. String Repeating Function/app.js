function repeatStringNumTimes(str,size){
  let result = "";
  for(let i=0; i < size; i++){
    result = result + str;
  }
  return result;

}
console.log(repeatStringNumTimes("Hamza",3));