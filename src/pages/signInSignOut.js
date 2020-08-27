import React from 'react';
import contact from '../img/images/background/contactBcg.jpeg';
import Hero from '../component/Hero/Hero';
import SignIn from '../component/Sign-in/SignIn';
import SignUp from '../component/Sign-up/SignUp';

import { Grid, makeStyles } from '@material-ui/core';

export default function SignInSignOut() {
	const classes = useStyles();
	return (
		<div>
			{' '}
			<Hero miniBanner img={contact} />{' '}
			<Grid
				container
				direction='row'
				justify='center'
				alignItems='center  '
				className={classes.SignInSignOut}
				spacing={3}
			>
				<SignIn />
				<SignUp />
			</Grid>
		</div>
	);
}

const useStyles = makeStyles((theme) => ({
	SignInSignOut: {
		backgroundColor: 'red',
		width: '1200px',
		display: 'flex',
		margin: '30px auto',
	},
}));
