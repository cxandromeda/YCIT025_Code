const CREDIT = 4;
let courseQualityValue =  (grade) => gradePointValue[grade] * CREDIT;
let totalQuality = 0;
let courses = [
    {courseNumber:1, letterGrade: "A+"},
    {courseNumber:2, letterGrade: "B+"},
    {courseNumber:3, letterGrade: "A"},
    {courseNumber:4, letterGrade: "F"},
]

const gradePointValue = {
    "A+": 4.3,
    "A": 4.0,
    "A-": 3.7,
    "B+": 3.3,
    "B": 3.0,
    "B-": 2.7,
    "C": 2.0,
    "F": 0,
};

for(let C of courses)
{
    C["quality"] = courseQualityValue(C["letterGrade"]);
    console.log(`Quality of course ${C.courseNumber} is ${C.quality}`);
    // totalQuality += C.quality;

}

// console.log(courses);

let qualityTotal = courses.reduce((accumulator, object) =>{return accumulator + object.quality;},0);

console.log(qualityTotal);

let totalCredit = CREDIT * courses.length;

console.log(`the total credits possible are ${totalCredit}`);

let GPA = qualityTotal / totalCredit;

console.log(GPA.toFixed(1));












