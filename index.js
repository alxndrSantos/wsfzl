var app = require('./config/custom-express')();



app.listen(5040, function(){
  console.log("Servidor rodando!");
});
