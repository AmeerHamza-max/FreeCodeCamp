function generatePassword(len){
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let newStr= '';
for (let i = 0 ; i < len ; i ++){
  let random = Math.floor(Math.random()*len)+1;
  newStr +=str[random];
}
return newStr;
}
let password = generatePassword(5);
console.log("Generated password:"+password);