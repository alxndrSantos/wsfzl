var mongoose = require('mongoose');

var Schema = new mongoose.Schema({

	titulo: {
		type: String,
		required: true
	},
  subTitulo: {
		type: String
	},
  url: {
		type: String,
		required: true
	},
	link: {
		type: String
	}

},
{
    versionKey: false
});
mongoose.model('Destaque', Schema)
