const person = {
    'name': 'priyank',
    'age': 29,
    'property': {
        
    }
}
Object.freeze(person);

console.log(Object.isFrozen(person));

/** Here i have modified the name property of person object but it doesn't allow */
person.name = 'Sandeep';
console.log(person)

const department = {
    'name': 'ZSO',
    'EmployeeCount': 25
}

Object.seal(department)

/** Here employee count is updated becase seal is used to protect the object to add/delete new config property*/
department.EmployeeCount = 30;
console.log(department);

/** Here we have tried to add new property Technology with department object but doesn't allow it.*/
department.Technology = ['Mainframe'];

console.log(department);