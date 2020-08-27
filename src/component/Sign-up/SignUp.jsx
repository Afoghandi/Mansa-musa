import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import FormInput from '../Form-input/FormInput';

export default function SignUp() {
	const classes = useStyles();
	return (
		<Grid container justify='flex-end' className={classes.signUnWrapper}>
			<Grid item>
				<h2>I do not have an account</h2>{' '}
				<span>Sign up with your email and password</span>{' '}
				<form>
					<FormInput
						name='name'
						type='name'
						required
						label='required'
						defaultValue='Display name'
						placeholder='Display Name'
					/>{' '}
					<FormInput
						name='email'
						type='email'
						required
						label='required'
						defaultValue='email'
						placeholder='Email'
					/>{' '}
					<FormInput
						id='filled-password-input'
						label='Password'
						type='password'
						autoComplete='current-password'
						placeholder='Password'
						required
					/>{' '}
					<FormInput
						id='standard-password-input'
						label='Password'
						type='password'
						required
						autoComplete='current-password'
						placeholder='Password'
					/>{' '}
				</form>
			</Grid>{' '}
		</Grid>
	);
}

const useStyles = makeStyles((theme) => ({
	signUnWrapper: { width: '350px', display: 'flex', marginTop: '10em' },
}));
