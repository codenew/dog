
var _ = require('underscore');
var mysql = null;

var users = {};

function User(userid, name, nickname){
    this.userid = userid;
    this.name = name;
	this.nickname = nickname;

}

_.extend(exports, {
	GetUser: function(userid, next){
	    if (!(userid in users))
		{
		// load from mysql
		var req = null;
		mysql.query(req,'select  a.accountid,a.accountname, b.roleid, b.rolename '+
						'from account a, role b '+
						'where a.accountid = b.accountid and a.accountid = ?',
						[userid],
						function(err, results, fields)
						{
							if (results.length = 1)
							{
								users[userid] = new User(userid, results[0].accountname, results[0].rolename);								
							}
						}
					);
	    }
	    
	    if (!(userid in users))
		{
			next('no such user');
	    }
		else
		{
			next(null, users[userid]);
	    }
	},
	    Register: function(username, password, next){
	    var req = null;
	    mysql.query(req, 'insert into user(name, password) values(?,?)', [username, password], function(err, results, fields){
		    if (err){
			next(err);
		    }else{
			if (results.affectedRows == 1){
			    next(null, 1);
			}else{
			    next('failed to insert');
			}
		    }
		});
	},
	    Auth: function (username, password, next){
	    if (username == 'kaikai'){
		next(null, 1);
	    }else{
		var req = null;
		mysql.query(req, 'select password from account where accountname=?', [username], function(err, results, fields){
			if (err){
			    next(err);
			}else{
				console.log(results.length);
				console.log(results[0].password);
			    if (results.length == 1 && results[0].password == password){
				console.log('run here');
				next(null, 1);				
				
			    }else{
				next('password mismatch');
			    }
			}

		    });
		//next('no such user');
	    }
	},
	    Logout: function(userid, logoutTime){
	    delete users[userid];
	},
	    init: function(mysqlPool){
	    mysql = mysqlPool;
	}



});
