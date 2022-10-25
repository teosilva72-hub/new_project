let SQL = require('../../Setting/SQL/MySQL/mysql');

module.exports = class ModelEnterprise{
    async ResultPromise(sql, check, filds) {
		return new Promise((resolve, reject) => {
			if(check == 1){
                SQL.Mysql.query(sql, [filds], (err, data, filds) => {
                    if (err) reject(err);
                    resolve(data);
                });
            }else{
                SQL.Mysql.query(sql, (err, data, filds) => {
                    if (err) reject(err);
                    resolve(data);
                });
            }
		});
	}
    async GetEnterprise(email){
        let query = `
            SELECT user.name, user.id, user.id_enterprise, enterprise.name
            FROM user
            INNER JOIN enterprise
            ON user.id_enterprise = enterprise.id where user.email = ? limit 1;
        `;
        const res = await this.ResultPromise(query, 1, email);
        return res;
    }
    async getTotalEnterprise(){
        let query = `SELECT count(id) FROM enterprise`;
        const res = await this.ResultPromise(query, null, '');
        return res;
    }
}