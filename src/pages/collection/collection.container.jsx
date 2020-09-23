import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionisLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../component/withSpinner/withSpinner';

import CollectioPage from './collection';

const MapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionisLoaded(state),
});

const CollectionPageContainer = compose(
    connect(MapStateToProps),
    WithSpinner
)(CollectioPage);

export default CollectionPageContainer;