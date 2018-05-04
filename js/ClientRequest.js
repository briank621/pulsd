const base = 'https://b339214c.ngrok.io';

function request(url, method, data) {
	const opt = {
		method,
		body: data
		// headers: { 'Content-Type': 'application/json' }
	};
	console.log('requesting...', opt);
	console.log('url:', url);
	console.log('data:', data);
	// console.log(opt);
	return new Promise((resolve, reject) => {
		fetch(url, opt)
			.then(response => {
				console.log('response', response);
				return response.json();
			})
			.then(jsonData => {
				console.log('resolving', jsonData);
				resolve(jsonData);
			})
			.catch(error => {
				console.log('error:', error);
				reject(error);
			});
	});
}

export function getEvent(id) {
	const url = `${base}/api/events?id=${id}`;
	return request(url, 'GET');
}

export function addEvent(data) {
	const url = `${base}/api/events`;
	return request(url, 'POST', data);
}
