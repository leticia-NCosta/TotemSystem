const tb = require('../Model');

exports.post_usuario = async (req, res) =>{
    tb_usuario.insertUsuario(req.body);
    res.status(201).send("Cadastro Realizado com sucesso")
}