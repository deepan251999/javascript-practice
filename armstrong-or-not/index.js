let a,b,rem,d=0;
b=parseInt(prompt("ENTER 3 DIGIT VALUE"));
a=b;
while(a>0){
    rem=a%10;
    d=d+rem*rem*rem;
    a=parseInt(a/10);
}
if(d==b){
    console.log("THIS NUMBER IS ARMSTRONG",b);
}
else{
    console.log("THIS NUMBER IS NOT ARMSTRONG",b);
}
