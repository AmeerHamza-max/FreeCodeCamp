function diffArray(arr1,arr2){
  const part1=arr1.filter((el)=>{
    return !arr2.includes(el);
  })
  const part2=arr2.filter((el)=>{
    return !arr1.includes(el);
  })
  return part1.concat(part2);
}
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));