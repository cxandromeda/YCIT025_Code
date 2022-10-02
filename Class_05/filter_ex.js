let examGrades = [
    {courseNumber:1, letterGrade: "A+"},
    {courseNumber:2, letterGrade: "B+"},
    {courseNumber:3, letterGrade: "A"},
    {courseNumber:4, letterGrade: "F"},
];
const passing_Grades = 60;

const examGrades1 = [
    { studentNumber: 1, grade: 78 },
    { studentNumber: 2, grade: 98 },
    { studentNumber: 3, grade: 45 },
    { studentNumber: 4, grade: 59 }
];

const passingGrades = examGrades1.filter(g => g.grade > passing_Grades)

console.log(passingGrades);

const failGrades = examGrades1.filter(g => g.grade < passing_Grades);

console.log(failGrades);

const examGrades2 = [{courseNumber:1,grade:45},
    {courseNumber:2,grade:79},
    {courseNumber:3,grade:100},
    {courseNumber:4,grade:0},



]

const exampass = examGrades2.filter(g => g.grade >passing_Grades)

console.log(exampass);

for (G of exampass)
{

// G[courseNumber] = G[grade]
console.log(`passing exam number is ${G.courseNumber}the score is${G.grade}`);

}