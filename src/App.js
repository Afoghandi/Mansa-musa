import React, { Fragment } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './component/Header/Header';

import {
	homepage,
	contact,
	shopPage,
	signInSignOut,
	checkoutPage,
} from './pages';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

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
					<Route path='/shop' component={shopPage} />
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
					<Route exact path='/checkout' component={checkoutPage} />{' '}
					<Route exact path='/contact' component={contact} />{' '}
				</Switch>{' '}
			</Fragment>
		);
	}
}
//obtain user from state
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

//dispatches action from redux
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
