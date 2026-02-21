let lunches=[];
function addLunchToEnd(arr,str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}
function addLunchToStart(arr,str){
   arr.unshift(str);
   console.log(`${str} added to the start of the lunch menu.`);
   return arr;
}
function removeLastLunch(arr){
   let str=arr.pop();
   if(arr==arr.length){
     console.log("No lunches to remove.")
     return arr;
   }
   else{
     console.log(`${str} removed from the end of the lunch menu.`);
     return arr;
   }
   
}
function removeFirstLunch(arr){
  let str=arr.shift();
  if(arr.length==0){
    console.log("No lunches to remove.")
    return arr;
  }
  else{
   console.log(`${str} removed from the start of the lunch menu.`);
   return arr;
  }
  
}
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
}
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
    return;
  }

  console.log(`Menu items: ${arr.join(", ")}`);
}
  
