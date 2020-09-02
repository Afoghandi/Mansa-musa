import React from 'react';

import { makeStyles } from '@material-ui/styles';

import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function CartIcon() {
	const classes = useStyles();
	return (
		<IconButton aria-label='cart'>
			<div>
				<ShoppingCartIcon className={classes.shoppingIcon} />
				<span className={classes.itemCount}>0</span>
			</div>
		</IconButton>
	);
}
const useStyles = makeStyles((theme) => ({
	shoppingIcon: {
		right: 3,
		top: 13,
		fontSize: '40px',
		padding: '0 4px',
		color: 'white',
	},
	itemCount: {
		position: 'absolute',
		fontSize: '20px',
		fontWeight: 'bold',
		right: '30px',
		color: theme.palette.secondary.main,
	},
}));
