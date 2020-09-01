import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import store from './redux/store';
import theme from './ui/Theme';

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>{' '}
		</ThemeProvider>{' '}
	</Provider>,
	document.getElementById('root')
);
