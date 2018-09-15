module.exports = function(app) {
  var geralDao = app.persistencia.geralDao;

  app.post("/bibloteca",function(req,res) {

    var noticia = req.body;
    geralDao.salva(noticia, function(exception, result){
    console.log('bibloteca criado: ' + result);
    res.json(result);
    });
  });

  app.put("/bibloteca:id",function(req,res) {

    geralDao.atualiza(req,res);

  });

  app.get("/bibloteca",geralDao.lista);


}
