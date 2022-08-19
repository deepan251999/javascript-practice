let n =parseInt(prompt("ENTER THE VALUE "));
let a=0;
for(i=2;i<n/2;i++){
    if(n%i==0){
        a=1;
        break;
    }
}
if (a==1) {
    console.log("not prime");
}
else{
    console.log("prime");
}


