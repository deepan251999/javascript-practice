let  a =parseInt(prompt("ENTER THE VALUE A"));
let  b =parseInt(prompt("ENTER THE VALUE B"));
let  c =parseInt(prompt("ENTER THE VALUE C"));
let total = (-b+(Math.sqrt(b**2-4*a*c))/2*a);
let result = (-b-(Math.sqrt(b**2-4*a*c))/2*a);
console.log(total);
console.log(result);