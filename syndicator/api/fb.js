import fetch from 'node-fetch';
const CONFIG = require('../.config.json');

const accessToken = CONFIG.facebook.accessToken;

export function makeFBPost(addr) {
	const link = encodeURIComponent(addr);
	const url = `https://graph.facebook.com/v3.0/613534065661353/feed?link=${link}&access_token=${accessToken}`;
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
		.then(response => {
			return response.json();
		})
		.then(jsonData => {
			console.log(jsonData);
		})
		.catch(error => {
			console.log('error:', error);
			reject(error);
		});
}

// makeFBPost(
// 	'https://pulsd.com/new-york/fashion/151-wooster-street/derek-lam-sample-sale--3'
// );
