import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';

const renderApp = () => {
	render(
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>,
		document.getElementById('app')
	);
};
renderApp();

if (module.hot) {
	module.hot.accept();
}
