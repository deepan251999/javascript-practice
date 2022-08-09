
// The sort() sorts the elements as strings in alphabetical and ascending order.
  
let names=["mathan","deepan","mani","sanjay","vairam","harish"];
names.sort();
console.log(names);


let numbers=[55,39,50,2,76,14];
numbers.sort();
console.log(numbers);

let any=["don",30,"billa","veeram",10];
any.sort();
console.log(any);

let no=[70,5,400,300,2,55];
no.sort(function(a,b){return a-b});
console.log(no);

let nob=[70,5,400,300,2,55];
nob.sort(function(a,b){return b-a});
console.log(nob);
