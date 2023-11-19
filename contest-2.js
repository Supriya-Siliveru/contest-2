let employees=[
    {
        name: "test1",
        age: 20,
        id: 1,
        salary:3000
    },
    {
        name: "test2",
        age: 22,
        id: 2,
        salary:4000
    },
    {
        name: "test3",
        age: 25,
        id: 3,
        salary:5000
    }
]
//display
console.log(employees)

// //insterting new employee using push func
employees.push({name:"test4", age: 27, salary: 7000, id: 4});
console.log(employees)

//removing using pop
employees.pop({name:"test3"});
console.log(employees)

//update
let newlist = employees.map(function(curr,index,arr){
    if(curr.id===1){
    curr.salary=6000
return curr}
else{
    return curr;
}
})

//to fing max salary
function findMaxSalaryEmployee() {
    const maxSalaryEmployee = employees.reduce((max, employee) => (employee.salary > max.salary) ? employee : max, employees[0]);
    console.log(`Employee with maximum salary: ID - ${maxSalaryEmployee.id}, Name - ${maxSalaryEmployee.name}, Salary - ${maxSalaryEmployee.salary}`);
}
findMaxSalaryEmployee();

//to find minimum salary
function findMinSalaryEmployee() {
    const minSalaryEmployee = employees.reduce((min, employee) => (employee.salary < min.salary) ? employee : min, employees[0]);
    console.log(`Employee with minimum salary: ID - ${minSalaryEmployee.id}, Name - ${minSalaryEmployee.name}, Salary - ${minSalaryEmployee.salary}`);
}
findMinSalaryEmployee();


