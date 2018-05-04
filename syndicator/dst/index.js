'use strict';

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _dateformat = require('dateformat');

var _dateformat2 = _interopRequireDefault(_dateformat);

var _eventbrite = require('./eventbrite');

var _fb = require('./fb');

var _tumblr = require('./tumblr');

var _pinterest = require('./pinterest');

var _twitter = require('./twitter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = _mysql2.default.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'dogface123',
	database: 'pulsd'
});

var field = { posted: 0 };

function updateQuery(ids) {
	console.log('Updating ids: ', ids);
	var query = connection.query('UPDATE events SET posted = 1 WHERE id in (' + ids + ')', ids, function (err, rows) {
		if (err) throw err;
		console.log(rows.affectedRows + ' record(s) updated');
		connection.end();
	});
	console.log('query', query.sql);
}

var query = connection.query('SELECT * FROM events WHERE ?', field, function (err, rows) {
	if (err) throw err;

	if (rows.length === 0) {
		console.log('No entries to update');
		connection.end();
	} else {
		// console.log(rows);
		var ids = [];
		for (var i = 0; i < rows.length; i++) {
			var id = rows[i]['id'];
			var venue = rows[i]['venue'];
			var description = rows[i]['description'];
			var loc = rows[i]['loc'];
			var details = rows[i]['details'];
			var picture = rows[i]['picture'];
			var start = rows[i]['start'];
			var end = rows[i]['end'];
			var url = rows[i]['url'];

			var startTime = (0, _dateformat2.default)(start, 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'');
			var endTime = (0, _dateformat2.default)(end, 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'');
			console.log('Adding event ' + id + ' to Eventbrite');
			(0, _eventbrite.makeEvent)(venue, description, startTime, endTime);
			console.log('Adding event ' + id + ' to Facebook');
			(0, _fb.makeFBPost)(url);
			console.log('Adding event ' + id + ' to Tumblr');
			(0, _tumblr.makeTumblrPost)(venue, details);
			console.log('Adding event ' + id + ' to Pinterest');
			(0, _pinterest.makePinterest)(picture, description);
			console.log('Adding event ' + id + ' to Twitter');
			(0, _twitter.makeTweet)(venue, url);

			ids.push(id);
		}

		updateQuery(ids);
		// console.log(rows);
		// console.log('The id is: ', rows[0]['id']);
	}
});