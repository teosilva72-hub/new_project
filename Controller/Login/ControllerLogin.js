
const jwt = require('jsonwebtoken');
const User = require('../../Model/User/DataUser');
require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = class ControllerLogin {

    async Verify(email, pass){
      try{
        const user = await User.findOne({
          attribute: ['id', 'name', 'email', 'tel', 'senha'], 
          where: { email: email}
        });
        if(user === null) return false;
        if (!(await bcrypt.compare(pass, user.senha))) return false;
       
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email, tel: user.tel }, process.env.SECRET_KEY, {
          expiresIn: '1h' //1 HOUR
        });

        return [true, token];
      }catch(error){
        console.log(error);
        return false;
      }
    }

}