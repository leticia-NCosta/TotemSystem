const databaseController = require('../Controller/databaseController');

module.exports = (app) => {
    app.post('/usuarios/post', (req, res) => databaseController.post_usuario(req,res));
}