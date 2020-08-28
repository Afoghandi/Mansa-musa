import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';

import FormInput from '../Form-input/FormInput';
import CustomButton from '../../ui/CustomButton';

export default function SignIn() {
	const classes = useStyles();

	return (
		<Grid container justify='center' className={classes.signInWrapper}>
			<Grid item sm={8} align='center' className={classes.signIn}>
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
					<FormInput
						id='filled-password-input'
						label='Password'
						type='password'
						autoComplete='current-password'
						placeholder='Password'
						required
					/>{' '}
					<Grid container direction='row' justify='space-evenly'>
						<Grid item spacing={2} className={classes.buttons}>
							<CustomButton>sign in</CustomButton>{' '}
						</Grid>
						<Grid item className={classes.buttons}>
							<CustomButton isGoogleSignIn>Use Google</CustomButton>{' '}
						</Grid>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
}

const useStyles = makeStyles((theme) => ({
	signInWrapper: {
		width: '800px',
		display: 'flex',
		[theme.breakpoints.down('md')]: {
			width: '600px',
			marginTop: '40em',
			position: 'relative',
			marginRight: '10px',
		},

		[theme.breakpoints.down('sm')]: {
			width: '600px',
			marginTop: '40em',
			position: 'relative',
			marginLeft: '-9em',
		},
	},

	buttons: {
		marginLeft: '2px',
	},
}));
