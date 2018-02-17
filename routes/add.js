var data = require('../data.json');

exports.addItem = function(req, res) {  
	// Your code goes here
	var newItem =  {
		name: req.query.name,
		price: req.query.price,
		priority: req.query.radio
	};

	console.log(newItem);
	
	data.Items.push(newItem);
	res.render('index', data);
}

