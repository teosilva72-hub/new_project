const jwt = require('jsonwebtoken');
const { promisify } = require('util');
require('dotenv').config();

module.exports = {
    eAdmin: async(req, res, next) => {
        const authHeader = req.headers.cookie
        if (!authHeader) {
            res.status(400);
            return res.redirect('/');
        }
        const [, token] = authHeader.split('=');
        if (!token) {
            res.status(400);
            return res.redirect('/');
        }
        try {
            const decode = await promisify(jwt.verify)(token, process.env.SECRET_KEY);
            req.idUser = decode.id;
            req.nameUser = decode.name;
            req.emailUser = decode.email;
            req.userTel = decode.tel;
            req.token = token;
            next()
        } catch (err) {
            return res.status(400).json({
                erro: true,
                mensagem: 'Token Invalido'
            })
        }

    }
}