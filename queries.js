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
    .then(function(answer) {
        const newDepartment = answer.department;
        const sql = `INSERT INTO department (label) VALUES ("${newDepartment}")`;
        connection.query(sql, function(err, res) {
            if (err) {
                throw err;
            }
            console.table(res);
        })
    })
};

const addRole = () => {

};

const addEmployee = () => {

};

const updateEmployeeRole = () => {

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