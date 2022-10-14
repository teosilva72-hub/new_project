const Sequelize = require('sequelize');

const conn = new Sequelize('newProject', 'root', 'trcvbr18', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    conn: conn
}