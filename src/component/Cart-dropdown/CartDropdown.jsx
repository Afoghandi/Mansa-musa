import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../../ui/CustomButton';

const CartDropdown = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Paper className={classes.cartDropdown} elevation={3}>
				<div className={classes.cartItems} />
				<CustomButton> Go to checkout </CustomButton>{' '}
			</Paper>
		</Fragment>
	);
};

const useStyles = makeStyles((theme) => ({
	cartDropdown: {
		position: 'absolute',

		width: '240px',
		height: '340px',
		display: 'flex',
		flexDirection: ' column',
		padding: '20px',

		backgroundColor: 'white',
		top: '80px',
		right: '0',
		zIndex: '5',
	},
	cartItems: {
		height: ' 3000px',
		display: 'flex',
		flexDirection: ' column',
		overflow: 'scroll',
	},
}));
export default CartDropdown;
