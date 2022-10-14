const User = require('../../Model/User/dataUser');
const bcrypt = require('bcrypt');

module.exports = class ControllerUser{

    async Verify(data){
        
    }
    async Register(data){
        console.log(data)
       if(data.senha != data.repSenha) return false;
       if(data.cep.length < 8) return false;
       if(data.nivelAccess == undefined) data.nivelAccess = 4;
       data.tokenValidation = Math.floor(Math.random() * 9999) + 1000;
       data.ativo = 1;
       data.senha = await bcrypt.hash(data.senha, 8);
       await User.create(data);
       return true;
    }
    async Delete(data){

    }
    async Updata(data){

    }

}