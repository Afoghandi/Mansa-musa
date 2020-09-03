import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
	const classes = useStyles();
	return (
		<Button
			variant='contained'
			color='secondary'
			className={` ${classes.inverted ? 'inverted' : ''} ${
				isGoogleSignIn ? `${classes.googleSignIn}` : ''
			} ${classes.button}`}
			{...otherProps}
		>
			{children}{' '}
		</Button>
	);
}

const useStyles = makeStyles((theme) => ({
	button: {
		...theme.typography.button,
		color: 'white',
		'&:hover': {
			backgroundColor: 'white',
			borderColor: '#0062cc',
			color: 'black',
			border: ' 1px solid black',
		},
	},
	googleSignIn: {
		backgroundColor: theme.palette.primary.main,
		color: 'white',
		'&:hover': {
			backgroundColor: 'white',
			border: 'none',
		},
	},
	inverted: {
		backgroundColor: 'white',
		color: 'black',
		border: '1px solid black',
		'&:hover': {
			backgroundColor: 'black',
			color: 'white',
			border: 'none',
		},
	},
}));

export default CustomButton;
