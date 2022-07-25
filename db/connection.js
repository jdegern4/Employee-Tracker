const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'gFLCjcNR4J5R',
        database: 'employee_tracker'
    }
);

module.exports = connection;