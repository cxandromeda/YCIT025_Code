

for(let i = 0;i < 26;i++){
    let res = "\t";
    if(i%3 == 0){
        res += "Fizz";
    }

    if(i%5 ==0){
        res += "Buzz"
    }

    console.log(i + res);

}


arr = [1,4,6,7,8,9]

for(let i in arr){
    console.log(arr[i]);
}