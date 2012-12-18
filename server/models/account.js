
var _ = require('underscore');
var mysql = null;

var online_accounts = {};

function Account(id, name, logintime){
    this.id = id;
    this.name = name;
    this.logintime = logintime;
}

_.extend(exports, {
    Find: function(id, next){
	if (id in online_accounts){
	    next(null, online_accounts[id]);
	    return;
	}
	// load from mysql
	var req = null;
	mysql.query(req, 'select id,name from account where id = ?',
		    [userid], function(err, results, fields){
			if (err){
			    next(err);
			    return;
			}
			if (results.length == 1) {
			    var record = results[0];
			    var newAccount = new Account(record.id, record.name, new Date());
			    online_accounts[record.id] = newAccount;
			    next(null, newAccount);
			} else {
			    next('failed to load account info from database.');
			}
		    });
    },
    Register: function(username, password, next){
	var req = null;
	mysql.query(req,
		    'insert into account(name, password) values(?,?)',
		    [username, password], function(err, results, fields){
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
	if (username == 'test'){ // in case no db available
	    next(null, 1);
	}else{
	    var req = null;
	    mysql.query(req, 'select id,name,password from account where name=?', [username], function(err, results, fields){
		if (err) {
		    next(err);
		} else if (results.length == 1) {
		    var record = results[0];
		    if (record.password == password){
			console.log('run here');
			AddUser(record.id, record.name, record.password);
			next(null, 1);
			return;
		    }
		}
		next('password mismatch');
	    });
	    //next('no such user');
	}
    },
    Logout: function(id, logoutTime){
	delete online_account[id];
    },
    init: function(mysqlPool){
	mysql = mysqlPool;
    }
});
