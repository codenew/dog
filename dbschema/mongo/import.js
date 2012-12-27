var fs = require('fs')
//, process = require('process')
, path = require('path')
, spawn = require('child_process').spawn;

var basePath = '../backup';

fs.readdir(basePath, function(err, files){
    for (var i = 0, l = files.length; i < l; ++i){
	var fileName = files[i]; 
	var targetFile = path.join(basePath, fileName);
	im = spawn('mongoimport', ['-d', 'dog', '-c', fileName, targetFile]);
    }
});

