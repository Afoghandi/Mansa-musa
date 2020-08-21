import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Header from './component/Header/Header';

import theme from './ui/Theme';

//import styles from './App.module.css';

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<Header />
						<Switch>
							<Route exact path='/' component={() => <div>Home</div>} />
							<Route exact path='/shop' component={() => <div>shop</div>} />
							<Route
								exact
								path='/signin'
								component={() => <div>Sign In</div>}
							/>
							<Route
								exact
								path='/contact'
								component={() => <div>Contact</div>}
							/>
						</Switch>
					</BrowserRouter>
				</ThemeProvider>{' '}
			</Fragment>
		);
	}
}

export default App;
