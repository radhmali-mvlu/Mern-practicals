let student = {
    name: "Radha",
    rollno: 18,
    marks: 90
};
console.log("original object:");
console.log(student);
//accesing property
console.log("\n Accesing property");
console.log("Name: ", student.name);
console.log("Marks: ", student.marks);
//updating property
student.marks = 95;
console.log("\nAfter updating marks: \n", student);
//adding new property
student.city = "Mumbai";
console.log("\nafter adding : \n ", student);
//delete property
delete student.rollno;
console.log("\nafter deleteing rollno: \n", student)
console.log("radhika");
