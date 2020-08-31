import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './component/Header/Header';

import { homepage, shop, signInSignOut, contact } from './pages';

import theme from './ui/Theme';

//import styles from './App.module.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}
	unsubscribeFromAuth = null;
	componentDidMount() {
		//const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					this.setState(
						{
							currentUser: { id: snapShot.id, ...snapShot.data() },
						},
						() => {
							console.log(this.state);
						}
					);
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<Fragment>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<Header currentUser={this.state.currentUser} />
						<Switch>
							<Route exact path='/' component={homepage} />{' '}
							<Route exact path='/shop' component={shop} />{' '}
							<Route exact path='/signin' component={signInSignOut} />{' '}
							<Route exact path='/contact' component={contact} />{' '}
						</Switch>{' '}
					</BrowserRouter>{' '}
				</ThemeProvider>{' '}
			</Fragment>
		);
	}
}

export default App;
