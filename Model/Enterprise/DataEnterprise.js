const sequelize = require('sequelize')
const { Sequelize } = require('../../Setting/SQL/MySQL/mysql')
const Conn = require('../../Setting/SQL/MySQL/mysql')
const Enterprise = Conn.conn.define('enterprise', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        fantasy: {
            type: Sequelize.STRING
        },
        cnpj: {
            type: Sequelize.STRING
        },
        insc_est:{
            type: Sequelize.STRING
        },
        cod_atv: {
            type: Sequelize.STRING
        },
        cod_nature: {
            type: Sequelize.STRING
        },
        contact: {
            type: Sequelize.STRING
        },
        tel: {
            type: Sequelize.STRING
        },
        celular: {
            type: sequelize.STRING
        },
        email: {
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
//Enterprise.sync({ force: true })
module.exports = Enterprise