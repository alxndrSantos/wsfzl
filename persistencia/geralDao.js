var mongoose = require('mongoose');

var model = mongoose.model('Geral');
var geralDao = {};

geralDao.salva = function(req, res) {

  model.create(req,res)
		.then(function(geral) {
			res.json(geral);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
};

geralDao.atualiza = function(req, res) {

  		model.findByIdAndUpdate(req.params.id, req.body)
  		.then(function(geral) {
  			res.send('conteudo atualizado');
  		}, function(error) {
  			console.log(error);
  			res.sendStatus(500);
  		})
};
geralDao.lista = function(req, res) {

  model.find()
		.then(function(geral) {
			res.json(geral);
		}, function(error) {
			console.log(error);
			res.status(500).json(error);
		});

}

module.exports = function(app){
     return geralDao;
 };
