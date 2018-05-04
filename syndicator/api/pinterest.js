import path from 'path';
import fs from 'fs';
import request from 'request';
const CONFIG = require('../.config.json');

// const accessToken = 'AcvBtoVVDfsw1p6DVT6iBs5x3gJ8FStHyE-xPzJE5pQU6kA-4gAAAAA';
const accessToken = CONFIG.pinterest.accessToken;

export function makePinterest(fileInput, description) {
	const filePath = path.join(
		__dirname,
		`/../../database/public/${fileInput}`
	);
	const desc = encodeURIComponent(description);
	const url = `https://api.pinterest.com/v1/pins/?board=briank621/pulsd&note=${desc}&access_token=${accessToken}`;
	var req = request.post(url, (err, resp, body) => {
		if (err) console.log(err);
		else console.log('Body: ', body);
	});
	let form = req.form();
	form.append('image', fs.createReadStream(filePath));
}

// addPinterest(
// 	'/../../database/public/jimmy.jpg',
// 	'$39 Ticket To The 2018 Cinco De Derby: 2 Hr Open Bar Party ($69 Value)'
// );
