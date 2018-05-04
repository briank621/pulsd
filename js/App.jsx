import React from 'react';
import AdminPanel from './AdminPanel';
import WebsitePanel from './WebsitePanel';
import DatabasePanel from './DatabasePanel';

require('./App.css');

const App = () => (
	<div>
		<AdminPanel />
		<WebsitePanel />
		<DatabasePanel />
	</div>
);

export default App;
