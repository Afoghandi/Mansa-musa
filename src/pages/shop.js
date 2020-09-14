import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../firebase/firebase.utils';
import CollectionOverview from '../component/Collection-overview/CollectionsOverview';
import CollectionPage from './collection';
import { updateCollections } from '../redux/shop/shop.actions';
import WithSpinner from '../component/with-spinner/withSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};
	unSubscribeFromSnapshot = null;
	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		collectionRef.onSnapshot(async (snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}
	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className='shopPage'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>{' '}
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>{' '}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionMap) =>
		dispatch(updateCollections(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
