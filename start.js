const connection = require('./db/connection');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const startMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Welcome to the Employee Tracker. What would you like to do?',
            name: 'MainMenu',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit'],
        }])
        .then(Response => {
            if (Response.MainMenu === 'View all departments') {
                viewAllDepartments();
            } else if (Response.MainMenu === 'View all roles') {
                viewAllRoles();
            } else if (Response.MainMenu === 'View all employees') {
                viewAllEmployees();
            } else if (Response.MainMenu === 'Add a department') {
                addDepartment();
            } else if (Response.MainMenu === 'Add a role') {
                addRole();
            } else if (Response.MainMenu === 'Add an employee') {
                addEmployee();
            } else if (Response.MainMenu === 'Update an employee role') {
                updateEmployeeRole();
            } else if (Response.MainMenu === 'Quit') {
                console.log('Goodbye.');
                process.exit();
            }
        });
};

startMenu();