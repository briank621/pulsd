const crypto = require('crypto');
const OAuth = require('oauth-1.0a');
const request = require('request');
const CONFIG = require('../.config.json');

const oauth = OAuth({
	consumer: {
		key: CONFIG.twitter.consumerKey,
		secret: CONFIG.twitter.consumerSecret
	},
	signature_method: 'HMAC-SHA1',
	hash_function(baseString, key) {
		return crypto
			.createHmac('sha1', key)
			.update(baseString)
			.digest('base64');
	}
});

// Note: The token is optional for some requests
const token = {
	key: CONFIG.twitter.accessToken,
	secret: CONFIG.twitter.tokenSecret
};

export function makeTweet(title, url) {
	const status = `${title} ${url}`;
	const request_data = {
		url: 'https://api.twitter.com/1.1/statuses/update.json',
		method: 'POST',
		data: { status }
	};
	request(
		{
			url: request_data.url,
			method: request_data.method,
			form: oauth.authorize(request_data, token)
		},
		function(error, response, body) {
			// Process your data here
			if (error) {
				console.log('Error posting tweet ', error);
			} else {
				console.log('Finished posting tweet');
			}
			// console.log('response: ', response);
			// console.log('body: ', body);
		}
	);
}
