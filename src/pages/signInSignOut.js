import React, { Fragment } from 'react';

import SignIn from '../component/Sign-in/SignIn';
import SignUp from '../component/Sign-up/SignUp';

import { Grid, makeStyles } from '@material-ui/core';

export default function SignInSignOut() {
	const classes = useStyles();
	const [spacing] = React.useState(3);
	return (
		<Fragment>
			{' '}
			<Grid
				container
				className={classes.SignInSignOut}
				spacing={spacing}
				justify='center'
			>
				<Grid item xs={4}>
					<SignIn />
				</Grid>{' '}
				<Grid item xs={4}>
					<SignUp />
				</Grid>{' '}
			</Grid>{' '}
		</Fragment>
	);
}

const useStyles = makeStyles((theme) => ({
	SignInSignOut: {
		flexGrow: 1,
		//marginTop: '12em',

		margin: '30px auto',
		[theme.breakpoints.down('md')]: {
			width: '100%',
		},
	},
}));
