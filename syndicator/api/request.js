import fetch from 'node-fetch';

export function request(url, method, data) {
	const opt = {
		method,
		body: data,
		headers: { 'Content-Type': 'application/json' }
	};
	// console.log('requesting...', opt);
	// console.log('url:', url);
	// console.log('data:', data);
	// console.log(opt);
	return new Promise((resolve, reject) => {
		fetch(url, opt)
			.then(response => {
				// console.log('Received response', response);
				return response.json();
			})
			.then(jsonData => {
				// console.log('resolving', jsonData);
				resolve(jsonData);
			})
			.catch(error => {
				console.log('error:', error);
				reject(error);
			});
	});
}
