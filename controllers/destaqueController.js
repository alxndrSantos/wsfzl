module.exports = function(app) {
  var destaqueDao = app.persistencia.destaqueDao

    app.get("/destaque",destaqueDao.lista);


    app.post("/destaque",function(req,res) {

      var noticia = req.body;
      destaqueDao.salva(noticia, function(exception, result){
      console.log('destaque criado: ' + result);
      res.json(result);
      });
    });

    app.get("/destaque:id",function(req,res) {

      destaqueDao.buscaPorID(req.params.id,res);

    });

    app.delete("/destaque:id",function(req,res) {

      destaqueDao.removePorId(req.params.id,res);

    });

    app.put("/destaque:id",function(req,res) {

      destaqueDao.atualiza(req,res);

    });
}
