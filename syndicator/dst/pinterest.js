'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.makePinterest = makePinterest;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONFIG = require('../.config.json');

// const accessToken = 'AcvBtoVVDfsw1p6DVT6iBs5x3gJ8FStHyE-xPzJE5pQU6kA-4gAAAAA';
var accessToken = CONFIG.pinterest.accessToken;

function makePinterest(fileInput, description) {
	var filePath = _path2.default.join(__dirname, '/../../database/public/' + fileInput);
	var desc = encodeURIComponent(description);
	var url = 'https://api.pinterest.com/v1/pins/?board=briank621/pulsd&note=' + desc + '&access_token=' + accessToken;
	var req = _request2.default.post(url, function (err, resp, body) {
		if (err) console.log(err);else console.log('Body: ', body);
	});
	var form = req.form();
	form.append('image', _fs2.default.createReadStream(filePath));
}

// addPinterest(
// 	'/../../database/public/jimmy.jpg',
// 	'$39 Ticket To The 2018 Cinco De Derby: 2 Hr Open Bar Party ($69 Value)'
// );