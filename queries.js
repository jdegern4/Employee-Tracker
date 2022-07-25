const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const connection = require('./db/connection');
const start = require('./start');

const viewAllDepartments = () => {
    const sql = `SELECT * FROM department;`;
    connection.query(sql, (err, rows) => {
        console.table(rows);
    })
};

const viewAllRoles = () => {
    const sql = `SELECT * FROM role;`;
    connection.query(sql, (err, rows) => {
        console.table(rows);
    })
};

const viewAllEmployees = () => {
    const sql = `SELECT * FROM employees;`;
    connection.query(sql, (err, rows) => {
        console.table(rows);
    })
};

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What department should be added?'
        }
    ])
        .then(function (answer) {
            const newDepartment = answer.department;
            const sql = `INSERT INTO department (label)
                VALUES
                ("${newDepartment}")`;
            connection.query(sql, function (err, res) {
                if (err) {
                    throw err;
                }
                console.table(res);
            })
        })
};

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'What role should be added?'
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is this role's salary?"
        },
        {
            type: 'list',
            name: 'department',
            message: 'Which department does this role belong to? 1. Accounting 2. Sales 3. Analytics 4. IT 5. Marketing 6. Shipping/Receiving',
            choices: [1, 2, 3, 4, 5, 6]
        }
    ])
        .then(function (answers) {
            const roleName = answers.role;
            const roleDepartment = answers.department;
            const roleSalary = answers.salary;

            const sql = `INSERT INTO role (title, department_id, salary)
                VALUES
                ("${roleName}", "${roleDepartment}", "${roleSalary}");`;
            connection.query(sql, function (err, res) {
                if (err) {
                    throw err;
                }
                console.table(res);
            })
        })
};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstname',
            message: "What is the new employee's first name?"
        },
        {
            type: 'input',
            name: 'lastname',
            message: "What is the new employee's last name?"
        },
        {
            type: 'input',
            name: 'role',
            message: "What is the new employee's role? 1. Accountant 2. Budget Analyst 3. Salesperson 4. Sales lead 5. Data Analyst 6. Business Analyst 7. Database Admin 8. IT Support 9. Marketing Manager 10. Digital Marketing Specialist"
        },
        {
            type: 'input',
            name: 'manager',
            message: "Who is the new employee's manager? (Leave blank if they don't have one)"
        }
    ])
        .then(function (answers) {
            const firstName = answers.firstname;
            const lastName = answers.lastname;
            const role = answers.role;
            const manager = answers.manager;

            const sql = `INSERT INTO employees (first_name, last_name, role_id, manager)
                VALUES
                ("${firstName}", "${lastName}", "${role}", "${manager}");`;
            connection.query(sql, function(err, res) {
                if (err) {
                    throw err;
                }
                console.log(res);
            })

        })
};

const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee',
            message: 'Enter the ID of the employee you want to update:'
        },
        {
            type: 'input',
            name: 'role',
            message: 'Enter the ID of their new role:'
        }
    ])
    .then(function(answers) {
        const employee = answers.employee;
        const role = answers.role;

        const sql = `UPDATE employees SET role_id = "${role}" WHERE id = "${employee}";`;

        connection.query(sql, function(err, res) {
            if (err) {
                throw err;
            }
            console.log("The employee's role has been updated.");
        })
    })
};

module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};