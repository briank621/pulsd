'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.makeEvent = makeEvent;

var _request = require('./request');

var CONFIG = require('../.config.json');

var oauth = '?token=' + CONFIG.eventbrite.accessToken;
var base = 'https://www.eventbriteapi.com/v3/events';

function makeEvent(name, description, start, end) {
	console.log('Creating event ' + name + ', ' + description + ', ' + start + ', ' + end);
	var _name = { html: name };
	var _description = { html: description };
	var _start = { timezone: 'America/New_York', utc: start };
	var _end = { timezone: 'America/New_York', utc: end };
	var event = {
		event: {
			name: _name,
			description: _description,
			start: _start,
			end: _end,
			listed: false,
			currency: 'USD'
		}
	};
	var data = JSON.stringify(event);
	// console.log(data);
	var url = base + '/' + oauth;
	(0, _request.request)(url, 'POST', data).then(function (resp) {
		// console.log('resp:', resp);
		var id = resp['id'];
		// console.log('id: ', id);
		if (id) {
			console.log('Created event with ', id);
			addTickets(id);
		}
	});
}

function addTickets(id) {
	console.log('Adding ticket for ', id);
	var _ticket_class = {
		name: 'General Admission',
		free: true,
		quantity_total: 100
	};
	var tickets = {
		ticket_class: _ticket_class
	};
	var data = JSON.stringify(tickets);
	// console.log(data);
	var url = base + '/' + id + '/ticket_classes/' + oauth;
	(0, _request.request)(url, 'POST', data).then(function (resp) {
		publishEvent(id);
	});
}

function publishEvent(id) {
	console.log('Publishing event for ', id);
	var url = base + '/' + id + '/publish/' + oauth;
	(0, _request.request)(url, 'POST').then(function (resp) {
		var success = resp['published'];
		if (success) {
			console.log('Event ' + id + ' successfully published');
		}
	});
}

// makeEvent(
// 	'Party',
// 	"Like it's my birthday",
// 	'2018-08-03T00:00:00Z',
// 	'2018-08-04T00:00:00Z'
// );