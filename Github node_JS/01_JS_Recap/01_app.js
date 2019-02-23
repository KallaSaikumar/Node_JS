// Object , Arrays , Functions
let employees = [
    {
        name : 'John',
        age : 40,
        designation : 'Sr. Manager',
        active : true
    },
    {
        name : 'Williams',
        age : 36,
        designation : 'Manager',
        active : false
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : true
    },
    {
        name : 'Laura',
        age : 23,
        designation : 'Software Engineer',
        active : false
    }

];

// Filter
let seniorEmployees = employees.filter((employee) => {
    return employee.age < 35;
});

console.log(seniorEmployees);