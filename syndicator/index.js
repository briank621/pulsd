import mysql from 'mysql';
import dateFormat from 'dateformat';
import { makeEvent } from './eventbrite';
import { makeFBPost } from './fb';
import { makeTumblrPost } from './tumblr';
import { makePinterest } from './pinterest';
import { makeTweet } from './twitter';

const connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'dogface123',
	database: 'pulsd'
});

const field = { posted: 0 };

function updateQuery(ids) {
	console.log('Updating ids: ', ids);
	const query = connection.query(
		`UPDATE events SET posted = 1 WHERE id in (${ids})`,
		ids,
		(err, rows) => {
			if (err) throw err;
			console.log(rows.affectedRows + ' record(s) updated');
			connection.end();
		}
	);
	console.log('query', query.sql);
}

const query = connection.query(
	'SELECT * FROM events WHERE ?',
	field,
	(err, rows) => {
		if (err) throw err;

		if (rows.length === 0) {
			console.log('No entries to update');
			connection.end();
		} else {
			// console.log(rows);
			let ids = [];
			for (var i = 0; i < rows.length; i++) {
				const id = rows[i]['id'];
				const venue = rows[i]['venue'];
				const description = rows[i]['description'];
				const loc = rows[i]['loc'];
				const details = rows[i]['details'];
				const picture = rows[i]['picture'];
				const start = rows[i]['start'];
				const end = rows[i]['end'];
				const url = rows[i]['url'];

				const startTime = dateFormat(
					start,
					`UTC:yyyy-mm-dd'T'HH:MM:ss'Z'`
				);
				const endTime = dateFormat(end, `UTC:yyyy-mm-dd'T'HH:MM:ss'Z'`);
				console.log(`Adding event ${id} to Eventbrite`);
				makeEvent(venue, description, startTime, endTime);
				console.log(`Adding event ${id} to Facebook`);
				makeFBPost(url);
				console.log(`Adding event ${id} to Tumblr`);
				makeTumblrPost(venue, details);
				console.log(`Adding event ${id} to Pinterest`);
				makePinterest(picture, description);
				console.log(`Adding event ${id} to Twitter`);
				makeTweet(venue, url);

				ids.push(id);
			}

			updateQuery(ids);
			// console.log(rows);
			// console.log('The id is: ', rows[0]['id']);
		}
	}
);
