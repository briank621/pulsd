'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.makeFBPost = makeFBPost;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONFIG = require('../.config.json');

var accessToken = CONFIG.facebook.accessToken;

function makeFBPost(addr) {
	var link = encodeURIComponent(addr);
	var url = 'https://graph.facebook.com/v3.0/613534065661353/feed?link=' + link + '&access_token=' + accessToken;
	(0, _nodeFetch2.default)(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then(function (response) {
		return response.json();
	}).then(function (jsonData) {
		console.log(jsonData);
	}).catch(function (error) {
		console.log('error:', error);
		reject(error);
	});
}

// makeFBPost(
// 	'https://pulsd.com/new-york/fashion/151-wooster-street/derek-lam-sample-sale--3'
// );