'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.makeTumblrPost = makeTumblrPost;
var crypto = require('crypto');
var OAuth = require('oauth-1.0a');
var request = require('request');
var CONFIG = require('../.config.json');

var oauth = OAuth({
	consumer: {
		key: CONFIG.tumblr.consumerKey,
		secret: CONFIG.tumblr.consumerSecret
	},
	signature_method: 'HMAC-SHA1',
	hash_function: function hash_function(base_string, key) {
		return crypto.createHmac('sha1', key).update(base_string).digest('base64');
	}
});

// Note: The token is optional for some requests
var token = {
	key: CONFIG.tumblr.accessToken,
	secret: CONFIG.tumblr.tokenSecret
};

function makeTumblrPost(title, body) {
	var request_data = {
		url: 'https://api.tumblr.com/v2/blog/brian621/post',
		method: 'POST',
		data: { title: title, body: body, type: 'text' }
	};
	request({
		url: request_data.url,
		method: request_data.method,
		form: oauth.authorize(request_data, token)
	}, function (error, response, body) {
		// Process your data here
		if (error) {
			console.log('Error making Tumblr post ', error);
		} else {
			console.log('Finished posting on Tumblr');
		}
		// console.log('response: ', response);
		// console.log('body: ', body);
	});
}

// makeTumblrPost('OAuth testing', 'This is my first tumblr oauth post');