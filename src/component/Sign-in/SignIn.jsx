import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';

import FormInput from '../Form-input/FormInput';

export default function SignIn() {
	const classes = useStyles();
	return (
		<Grid
			container
			justify='flex-start'
			direction='column '
			alignItems='center'
			className={classes.signInWrapper}
		>
			<Grid item xs={12}>
				{' '}
				<h2>I already have an account</h2>{' '}
				<span>Sign in with your email and password</span>{' '}
				<form>
					<FormInput
						name='email'
						type='email'
						required
						label='required'
						defaultValue='email'
					/>
					<FormInput />
				</form>
			</Grid>
		</Grid>
	);
}

const useStyles = makeStyles((theme) => ({
	signInWrapper: { width: '350px', display: 'flex' },
}));
