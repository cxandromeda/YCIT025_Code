let a = 10;
function calculate(){
    a++;
}

calculate();

console.log(a);

let z = new Function("a","b","return a + b;")

console.log(z(1,2))