const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(num1,num2){
  if(num1===1 && num2===1){
   return "Hole-in-one!";
   }
  else if(num1===3 && num2===1){
     return "Hole-in-one!";
}
else if(num1===4 && num2===1){
  return "Hole-in-one!";
}
else if(num1===5 && num2===1){
  return "Hole-in-one!";
}
else if(num1===4 && num2===2){
  return "Eagle";
}
else if(num1===5 && num2===2){
  return "Eagle";
}
else if(num1===3 && num2===2){
  return "Birdie";
}
else if(num1===4 && num2===3){
  return "Birdie";
}
else if(num1===5 && num2===4){
  return "Birdie";
}
else if(num1===3 && num2===3){
  return "Par";
}
else if(num1===4 && num2===4){
  return "Par";
}
else if(num1===5 && num2===5){
  return "Par";
}
else if(num1===3 && num2===4){
  return "Bogey";
}
else if(num1===4 && num2===5){
  return "Bogey";
}
else if(num1===5 && num2===6){
  return "Bogey";
}
else if(num1===3 && num2===5){
  return "Double Bogey";
}
else if(num1===4 && num2===6){
  return "Double Bogey";
}
else if(num1===5 && num2===7){
  return "Double Bogey";
}
else if(num1===3 && num2===7){
  return "Go Home!";
}
else if(num1===4 && num2===8){
  return "Go Home!";
}
else if(num1===5 && num2===9){
  return "Go Home!";
}
}
