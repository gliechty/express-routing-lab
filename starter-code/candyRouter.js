var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}];

//What would need to go into candies
//in order to pass our first test?

// INDEX --- works
router.get('/', function(req,res) {
	res.json(candies);
});
// Fill out the rest of the routes here


// SHOW --- works
router.get('/:id', function(req,res) {
	var unique = req.params.id;
	for (i=0; i<candies.length; i++){
		if (candies[i].id==unique){
			res.json(candies[i]);
		}
	}
});

// CREATE --- works
router.post('/', function(req,res) {
	req.body.id=candies.length+1;
	candies.push(req.body);
	res.json(req.body);
});

// UPDATE --- works
router.put('/:id', function(req,res) {
	var unique = req.params.id;
	for (i=0; i<candies.length; i++){
		if (candies[i].id==unique){
			candies[i].color=req.body.color;
			candies[i].name=req.body.name;
			res.json(candies);
		}
	}
});
// DELETE 
router.delete('/:id', function(req,res) {
	var unique = req.params.id;
	for (var i=0; i<candies.length; i++){
		if (candies[i].id==unique){
			candies.splice(i, 1);
			console.log(candies);
		}
	}
	res.json(candies);
});

module.exports = router;












