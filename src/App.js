import React, { Fragment } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './component/Header/Header';

import { homepage, contact, shopPage, signInSignOut } from './pages';

import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
	unsubscribeFromAuth = null;
	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		const { currentUser } = this.props;
		return (
			<Fragment>
				<Header />
				<Switch>
					<Route exact path='/' component={homepage} />{' '}
					<Route exact path='/shop' component={shopPage} />
					<Route
						exact
						path='/signin'
						render={() =>
							currentUser ? (
								<Redirect to='/shop' />
							) : (
								<Route component={signInSignOut} />
							)
						}
					/>
					<Route exact path='/contact' component={contact} />{' '}
				</Switch>{' '}
			</Fragment>
		);
	}
}
//obtain user from state
const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

//dispatches action from redux
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
