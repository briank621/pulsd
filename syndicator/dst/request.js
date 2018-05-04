'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.request = request;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request(url, method, data) {
	var opt = {
		method: method,
		body: data,
		headers: { 'Content-Type': 'application/json' }
	};
	// console.log('requesting...', opt);
	// console.log('url:', url);
	// console.log('data:', data);
	// console.log(opt);
	return new Promise(function (resolve, reject) {
		(0, _nodeFetch2.default)(url, opt).then(function (response) {
			// console.log('Received response', response);
			return response.json();
		}).then(function (jsonData) {
			// console.log('resolving', jsonData);
			resolve(jsonData);
		}).catch(function (error) {
			console.log('error:', error);
			reject(error);
		});
	});
}