var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/portalfzl');

mongoose.connection.once('open', function() {
  console.log("ola eu sou banco");
});
mongoose.connection.on('error', function(error){
  console.log('Erro na conexão'+error);
});
mongoose.connection.on('disconnected', function(){
  console.log('Desconetado do mongodb ');
});
process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Aplicação terminada, conexão fechada')
			process.exit(0);
  		});

})
