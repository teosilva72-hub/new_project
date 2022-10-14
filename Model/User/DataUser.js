const sequelize = require('sequelize')
const { Sequelize } = require('../../Setting/SQL/MySQL/mysql')
const Conn = require('../../Setting/SQL/MySQL/mysql')
const User = Conn.conn.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        },
        cep: {
            type: Sequelize.STRING
        },
        logradouro: {
            type: Sequelize.STRING
        },
        bairro: {
            type: Sequelize.STRING
        },
        cidade: {
            type: Sequelize.STRING
        },
        uf: {
            type: Sequelize.STRING
        },
        number: {
            type: Sequelize.STRING
        },
        tel: {
            type: sequelize.STRING
        },
        nivelAccess: {
            type: Sequelize.INTEGER
        },
        tokenValidation: {
            type: Sequelize.INTEGER
        },
        ativo: {
            type: Sequelize.INTEGER
        }
    }, { freezeTableName: true, timestamps: false}
);
//User.sync({ force: true })
module.exports = User