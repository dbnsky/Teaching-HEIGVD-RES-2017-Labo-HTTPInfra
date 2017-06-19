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
	
    var numberOfTimeZone = chance.integer({min : 0, max : 10});
    
    console.log(numberOfTimeZone);
    var timeZones = [];

    for(var i = 0; i < numberOfTimeZone; ++i){
        
        var timezone = chance.timezone();
        timeZones.push({
            name : timezone.name,
            text : timezone.text,
            utc  : timezone.utc
        });    
    };
    
    console.log(timeZones);
    return timeZones;
}