var Chance = require('chance');
var chance = new Chance();

var express = require('express')
var app = express();

app.get('/', function(req, res){
	res.send(generateStudents());
});

app.listen(3000, function(){
	console.log('Accepting HTTP requests on port 3000');
});

function generateStudents(){
	var numberOfStudents = chance.integer({
		min: 0,
		max: 3
	});
	console.log(numberOfStudents);
	var students = [];
	for(var i = 0; i < numberOfStudents; i++) {
		students.push({
			cc_types: chance.cc_types()
		});
	};
	console.log(students);
	return students;		
}