var mongoose = require('mongoose');

var Schema = new mongoose.Schema({

	titulo: {
		type: String,
		required: true
	},
  conteudo: {
		type: String,
		required: true
	}

},
{
    versionKey: false
});
mongoose.model('Geral', Schema)
