var mongoose = require('mongoose');

var model = mongoose.model('Noticia');
var noticiaDao = {};

noticiaDao.salva = function(req, res) {

  model.create(req,res)
		.then(function(noticia) {
			res.json(noticia);      
		}, function(error) {
			console.log('não conseguiu');
			console.log(error);
			res.sendStatus(500);
		});
}

noticiaDao.lista = function(req, res) {

  model.find()
		.then(function(noticias) {
			res.json(noticias);
		}, function(error) {
			console.log(error);
			res.status(500).json(error);
		});

}

noticiaDao.buscaPorID = function(req, res){
  model.findById(req)
		.then(function(noticia) {
			if (!noticia) res.send('Noticia não encontrada');
			res.json(noticia);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
      res.send('Não achou');
		});

}

noticiaDao.removePorId = function(req, res) {

		model.remove({'_id' : req})
		.then(function() {
			res.sendStatus(200);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);

		});

	};

noticiaDao.atualiza = function(req, res) {

  		model.findByIdAndUpdate(req.params.id, req.body)
  		.then(function(noticia) {
  			res.send('Noticia atualizada');
  		}, function(error) {
  			console.log(error);
  			res.sendStatus(500);
  		})
  	};


module.exports = function(app){
     return noticiaDao;
 };
