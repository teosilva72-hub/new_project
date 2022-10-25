const User = require('../../Model/User/dataUser');
const bcrypt = require('bcrypt');
const Enterprise = require('../../Model/Enterprise/DataEnterprise');
module.exports = class ControllerUser {

    async Verify(data) {

    }
    async RegisterUser(data) {
        console.log(data)
        if (data.senha != data.repSenha) return false;
        if (data.cep.length < 8) return false;
        if (data.nivelAccess == undefined) data.nivelAccess = 4;
        data.tokenValidation = Math.floor(Math.random() * 9999) + 1000;
        data.ativo = 1;
        data.senha = await bcrypt.hash(data.senha, 8);
        await User.create(data);
        return true;
    }
    async RegisterEnterprise(data) {
        try {
            let check = false;
            const res = Object.entries(data).map(([key, value]) => (value));
            for (var i = 0; i < res.length; i++) {
                if ((res[i]) == '' || null || undefined) check = false;
                else check = true;
            }
            if (check) {
                try {
                    data.nivelAccess = 2;
                    data.tokenValidation = Math.floor(Math.random() * 9999) + 1000;
                    data.ativo = 1;
                    await Enterprise.create(data);
                    return true;
                } catch (er) {
                    return false;
                }
            }
            return false;
        } catch (error) {
            console.log('RegisterEnterprise ::::', error);
        }
    }
    async Delete(data) {

    }
    async Updata(data) {

    }

}