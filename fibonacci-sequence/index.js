let t =parseInt(prompt("ENTER THE VALUE OF A"));
let a=0,b=1;
for(i=0;i<=t;i++){
    temp=a+b;
    console.log(temp);
    a=b;
    b=temp;
}