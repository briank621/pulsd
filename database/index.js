const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const uuid = require('uuid/v1');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(fileUpload());

const router = express.Router(); // get an instance of the express Router

const connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'dogface123',
	database: 'pulsd'
});

connection.connect();

// middleware to use for all requests
router.use((req, res, next) => {
	// do logging
	console.log('Received a request.');
	// console.log(req);
	// console.log(req);
	next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', (req, res) => {
	res.json({ message: 'hooray! welcome to our api!' });
});

router
	.route('/events')
	.post((req, res) => {
		// console.log(req);
		// console.log('files: ', req.files);
		const file = req.files.file;
		const filename = uuid();

		file.mv(`${__dirname}/public/${filename}`, err => {
			if (err) {
				console.log('error making file: ', err);
				return res.status(500).send(err);
			}
		});

		const field = {
			venue: req.body.venue,
			description: req.body.description,
			loc: req.body.loc,
			details: req.body.details,
			picture: filename,
			start: req.body.start,
			end: req.body.end,
			url: req.body.url
		};
		// // console.log(req);
		// // console.log(field);
		const query = connection.query(
			'INSERT INTO events SET ?',
			field,
			err => {
				if (err) {
					console.log('error', err);
					res.json({
						message: 'Error',
						status: 1
					});
				} else {
					res.json(field);
				}
			}
		);
		// console.log('query', query.sql);
	})
	.get((req, res) => {
		const query = connection.query('SELECT * FROM events', (err, rows) => {
			if (err) throw err;

			if (rows.length === 0) {
				res.json({ id: -9999 });
			} else {
				console.log(rows);
				// console.log('The id is: ', rows[0]['id']);
				res.json(rows);
			}
		});
		console.log('query', query.sql);
	});

app.use('/api', router);
const port = 8082;
app.listen(port);
console.log('listening on port ', port);

// connection.query('SELECT * FROM user', function(err, rows, fields) {
// 	if (err) throw err;

// console.log(rows);
// console.log('The id is: ', rows[0]['id']);
// });
