import React from 'react';
import ReactDOM from 'react-dom';

import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { store, persistor } from './redux/store';
import theme from './ui/Theme';

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>{' '}
			</BrowserRouter>{' '}
		</ThemeProvider>{' '}
	</Provider>,
	document.getElementById('root')
);
