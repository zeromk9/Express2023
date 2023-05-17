const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'martinmysql',
    password: 'password',
    database: 'api',
};


const pool = mysql.createPool(config);

module.exports = pool;

