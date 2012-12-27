var fs = require('fs')
, path = require('path')
, exec = require('child_process').exec;

var basePath = '../backup';

fs.readdir(basePath, function(err, files){
    if (err){
	console.log(err);
	return;
    }
    for (var i = 0, l = files.length; i < l; ++i){
	var fileName = files[i];
	var targetFile = path.join(basePath, fileName);
	fs.unlinkSync(targetFile);
    }
    exec('mongo --quiet dog exportcollection.js', function(err, stdout, stderr){
	if (err){
	    console.log(err);
	    return;
	}
	var lines = stdout.split('\n')
	for (var i = 0, l = lines.length; i < l; i++){
	    var line = lines[i];
	    if (line != ''){
		(function(line){
		var targetFile = path.join(basePath, line);
		    var cmdLine = ['mongoexport -d dog -c', line].join(' ');
		    //console.log(cmdLine);
		    exec(cmdLine, function(err, stdout, stderr){
			if (err){
			    console.log(err);
			    return;
			}
			fs.writeFileSync(targetFile, stdout);
			console.log(targetFile);
			console.log(stdout);
		    });
		})(line);
	    }
	}
    });
});
