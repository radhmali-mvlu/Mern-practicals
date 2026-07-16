//array
let students = [
    {
        rollno: 101,
        name: "DH",
        marks : 80
    }, 
    {
        rollno: 102,
        name: "Radha",
        marks : 80
    },
    {
        rollno: 1013,
        name: "Abhi",
        marks: 90
    }
];
//function to display student details
function display(s)
{
    console.log("--------student details--------");
    for(let stud of s)
    {
        console.log(`Roll no: ${stud.rollno}`);
        console.log(`Nmae: ${stud.name}`);
        console.log(`Marks: ${stud.marks}`);
        console.log("--------------------");
    }
}
//function call
display(students);
console.log("radhika");