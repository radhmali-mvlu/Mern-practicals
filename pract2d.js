let numbers = [10, 20, 30, 40, 50];
//map()
let double = numbers.map(num => num*2);
//filter
let greater25 = numbers.filter(num => num>25);
//reduce
let total = numbers.reduce((sum , num) => sum + num,0);

console.log("original array: ", numbers);
console.log("map: ", double);
console.log("Filter:" ,greater25);
console.log("Reduce: ",total);
console.log("radhika");