const Sequelize = require('sequelize');
const mysql = require('mysql2');
require('dotenv').config();
const conn = new Sequelize('newProject', 'root', 'trcvbr18', {
    host: 'localhost',
    dialect: 'mysql'
});
const sqlConn = mysql.createConnection({
    host: process.env.hostname,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});
module.exports = {
    Sequelize: Sequelize,
    conn: conn,
    Mysql: sqlConn
}