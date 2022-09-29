const validUnits = ["C", "F"]

function convertTemp(value, unit)
{  
    if(!validUnits.includes(unit)){
        console.log("Unit is not recognized");
    }
    // if(isNaN(value))
    // {
    //     console.log("Value must be a number.");
    //     return NaN;
    // }
    
    let tempResult = 0.00;
   switch(unit)
   {
     case "C":
        tempResult = convertCF(value);
        break;

     case "F":
        tempResult = convertFC(value);
        break;

    default:
        //wrong unit
        return NaN

   }
   return tempResult;
}

function contertCF(value)
{
    return (9/5) * value + 32;
}

function convertFC(value)
{
    return (5/9)* (value - 32) ;

}

console.log(convertTemp(41,"F"));