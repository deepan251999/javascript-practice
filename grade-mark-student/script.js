let mark =parseInt(prompt("ENTER THE MARK"));
if(mark>=90 && mark<=100){
    console.log(" YOUR GRADE IS A+");
}
else if(mark>=80 && mark<90){
    console.log("YOUR GRADE IS A");
}
else if(mark>=60 && mark<80){
    console.log("YOUR GRADE IS B");
}
else if(mark>=35 && mark<60){
    console.log("YOUR GRADE IS C");
}
else if(mark>=0 && mark<35){
    console.log("YOUR GRADE IS FAIL");
}
else{
    console.log("invaild number")
}


