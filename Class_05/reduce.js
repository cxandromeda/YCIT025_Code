const r1 = [1,5,3,6,2];
let total = r1.reduce((acc, val) => {return acc + val},0);

console.log(total);

let largest = r1.reduce((acc, val) => {return Math.max(acc,val);})

let largest1 = r1.reduce((acc, val) => acc > val? acc:val)

console.log(largest1);

//Filter

const inputSet = [6,7,3,67,20,4];

outputSet = [];

const smallerThanTen = inputSet.filter(w => w < 10);



console.log(smallerThanTen);

const words = ['spray', 'limit', 'elite', 'exuberrant']

const res = words.filter(word => word.length > 6);

console.log(res);
