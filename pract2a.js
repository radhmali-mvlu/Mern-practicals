/* //function calculateSalary(name, basicSalary){
    let bonus = 5000;
    let totalSalary = basicSalary + bonus;
    console.log("Employee Name:" , name);
    console.log("Basic salary:" , basicSalary);
    console.log("Bonus:" , bonus);
    console.log("Total Salary:" , totalSalary);
    
}
calculateSalary("Radha", 30000);
console.log("radhika"); */
function generateBill(product, quantity, price){

    let total = quantity * price;
    let bill = total +(total * 0.09);

    console.log("Product Name:" , product);
    console.log("Quantity: ", quantity);
    console.log("price per item:" , price);
    console.log("Total bill:" , bill);
    
}
generateBill("Fridge", 1, 50000);
console.log("radhika");
