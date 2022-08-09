const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
myFish.splice(2, 0, 'drum');
console.log(myFish);

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed


let myFis = ['angel', 'clown', 'trumpet', 'sturgeon'];
myFis.splice(0, 2, 'parrot', 'anemone', 'blue');
console.log(myFis);
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]

const myFi = ['angel', 'clown', 'mandarin', 'sturgeon'];
myFi.splice(-2, 1);
console.log(myFi);
// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]

