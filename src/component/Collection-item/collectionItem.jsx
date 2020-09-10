import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addItem } from '../../redux/cart/cart.actions';

import { makeStyles } from '@material-ui/styles';
//import Paper from '@material-ui/core/paper';

import CustomButton from '../../ui/CustomButton';

const CollectionItems = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.collectionItem}>
				<div
					className={classes.image}
					style={{ backgroundImage: `url(${imageUrl})` }}
				/>{' '}
				<div className={classes.collectionFooter}>
					<span className={classes.name}> {name} </span>{' '}
					<span className={classes.price}> £{price} </span>{' '}
				</div>{' '}
				<CustomButton
					className={classes.customButton}
					onClick={() => addItem(item)}
				>
					{' '}
					Add to cart{' '}
				</CustomButton>{' '}
			</div>{' '}
		</Fragment>
	);
};
const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItems));

//styles

const useStyles = makeStyles((theme) => ({
	collectionItem: {
		marginTop: '10px',
		marginLeft: '20px',
		marginRight: '20px',
		width: '22vw',
		display: 'flex',
		flexDirection: 'column',
		height: '370px',
		alignItems: 'center',
		position: 'relative',
	},

	customButton: {
		width: '80%',
		opacity: '0.7',
		position: 'absolute',
		top: '255px',
	},
	'&:hover': {
		'& image': {
			opacity: '0.8',
		},
		'& customButton': {
			opacity: '0.85',
			display: 'flex',
		},
	},
	image: {
		width: '100%',
		height: '95%',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		marginBottom: '5px',
	},
	collectionFooter: {
		width: '100%',
		height: '5%',
		display: ' flex',
		justifyContent: 'space-between',
		fontSize: '18px',
	},
	name: {
		width: '85%',
		marginBottom: '20px',
		marginLeft: '5px',
	},

	price: {
		width: '15%',
	},
}));
