import { request } from './request';
const CONFIG = require('../.config.json');

const oauth = `?token=${CONFIG.eventbrite.accessToken}`;
const base = 'https://www.eventbriteapi.com/v3/events';

export function makeEvent(name, description, start, end) {
	console.log(`Creating event ${name}, ${description}, ${start}, ${end}`);
	let _name = { html: name };
	let _description = { html: description };
	let _start = { timezone: 'America/New_York', utc: start };
	let _end = { timezone: 'America/New_York', utc: end };
	let event = {
		event: {
			name: _name,
			description: _description,
			start: _start,
			end: _end,
			listed: false,
			currency: 'USD'
		}
	};
	let data = JSON.stringify(event);
	// console.log(data);
	const url = `${base}/${oauth}`;
	request(url, 'POST', data).then(resp => {
		// console.log('resp:', resp);
		const id = resp['id'];
		// console.log('id: ', id);
		if (id) {
			console.log('Created event with ', id);
			addTickets(id);
		}
	});
}

function addTickets(id) {
	console.log('Adding ticket for ', id);
	let _ticket_class = {
		name: 'General Admission',
		free: true,
		quantity_total: 100
	};
	let tickets = {
		ticket_class: _ticket_class
	};
	let data = JSON.stringify(tickets);
	// console.log(data);
	const url = `${base}/${id}/ticket_classes/${oauth}`;
	request(url, 'POST', data).then(resp => {
		publishEvent(id);
	});
}

function publishEvent(id) {
	console.log('Publishing event for ', id);
	const url = `${base}/${id}/publish/${oauth}`;
	request(url, 'POST').then(resp => {
		const success = resp['published'];
		if (success) {
			console.log(`Event ${id} successfully published`);
		}
	});
}

// makeEvent(
// 	'Party',
// 	"Like it's my birthday",
// 	'2018-08-03T00:00:00Z',
// 	'2018-08-04T00:00:00Z'
// );
