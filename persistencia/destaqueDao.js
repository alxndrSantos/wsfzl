var mongoose = require('mongoose');

var model = mongoose.model('Destaque');
var destaqueDao = {};

destaqueDao.salva = function(req, res) {

  model.create(req,res)
		.then(function(destaque) {
			res.json(destaque);
		}, function(error) {
			console.log('não conseguiu');
			console.log(error);
			res.sendStatus(500);
		});
}

destaqueDao.lista = function(req, res) {

  model.find()
		.then(function(destaque) {
			res.json(destaque);
		}, function(error) {
			console.log(error);
			res.status(500).json(error);
		});

}

destaqueDao.buscaPorID = function(req, res){
  model.findById(req)
		.then(function(destaque) {
			if (!noticia) res.send('Destaque não encontrado');
			res.json(destaque);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
      res.send('Não achou');
		});

}

destaqueDao.removePorId = function(req, res) {

		model.remove({'_id' : req})
		.then(function() {
			res.sendStatus(200);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);

		});

	};

destaqueDao.atualiza = function(req, res) {

  		model.findByIdAndUpdate(req.params.id, req.body)
  		.then(function(destaque) {
  			res.send('destaque atualizado');
  		}, function(error) {
  			console.log(error);
  			res.sendStatus(500);
  		})
  	};


module.exports = function(app){
     return destaqueDao;
 };
