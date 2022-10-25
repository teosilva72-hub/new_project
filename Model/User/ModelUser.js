let SQL = require('../../Setting/SQL/MySQL/mysql');

module.exports = class ModelUser{
    async ResultPromise(sql) {
		return new Promise((resolve, reject) => {
			SQL.Mysql.query(sql, (err, data, filds) => {
				if (err) reject(err);
				resolve(data);
			});
		});
	}
    async userEnterprise(){
       let query = 'SELECT * FROM newproject.user';
       let res = await this.ResultPromise(query);
       return res;
    }
	async getTotalUser(){
		let query = `SELECT count(id) FROM user`;
		let res = await this.ResultPromise(query);
		return res;
	}
}