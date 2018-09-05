var mongoose = require('mongoose');
var model = mongoose.model('Noticia');
module.exports = function(app) {
  var noticiaDao = app.persistencia.noticiaDao

    app.get("/noticias",noticiaDao.lista);


    app.post("/noticia",function(req,res) {

      var noticia = req.body;
      noticiaDao.salva(noticia, function(exception, result){
      console.log('noticia criado: ' + result);
      res.json(result);
      });
    });

    app.get("/noticia:id",function(req,res) {

      noticiaDao.buscaPorID(req.params.id,res);

    });

    app.delete("/noticia:id",function(req,res) {

      noticiaDao.removePorId(req.params.id,res);

    });

    app.put("/noticia:id",function(req,res) {

      noticiaDao.atualiza(req,res);

    });





}
