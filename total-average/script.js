
let a=[];
let s=0;
let value =parseInt(prompt("ENTER THE VALUE"));
for(i=0;i<value;i++){
    a[i] =parseInt(prompt("ENTER THE VALUE")); 
    mark=a[i]+s;
    s=mark;
}
avg=mark/value;
console.log(mark);
console.log(avg);
