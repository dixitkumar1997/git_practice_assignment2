let str="Dishu";
let rev="";
for(let i=str.length-1;i>=0;i++){
rev+=str[i];
}
if(rev==str){
console.log("It is a palindrome")
}
else{
console.log("It is not a palindrome")
}