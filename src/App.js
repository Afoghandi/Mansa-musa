import React, { Fragment } from 'react';

import { Route, Switch } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './component/Header/Header';

import { homepage, shop, signInSignOut, contact } from './pages';

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
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={homepage} />{' '}
					<Route exact path='/shop' component={shop} />{' '}
					<Route exact path='/signin' component={signInSignOut} />{' '}
					<Route exact path='/contact' component={contact} />{' '}
				</Switch>{' '}
			</Fragment>
		);
	}
}

export default App;
