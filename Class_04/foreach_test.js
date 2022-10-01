// const arr = [1,2,3,4,5];

// let BreakException = {};

// let myString = "";

// try{
// arr.forEach(function(el){
//     myString += el;
//     if(el === 3)
//         throw BreakException;
    

// });

// } catch (e){
//     if (e !== BreakException) throw e;

// }

// console.log(myString);


let BreakException = {};
let mystring = "";
const arr = ['a', 'b', 'c', 'd', 'f']
try {
  arr.forEach(function (el) {
    //console.log(el);
    mystring += el;

    if (el === "d") throw BreakException;
  });
} catch (e) {
  if (e !== BreakException) throw e;
}

console.log(mystring);