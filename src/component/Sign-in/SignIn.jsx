import React, { useState } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { Grid } from '@material-ui/core';

import FormInput from '../Form-input/FormInput';
import CustomButton from '../../ui/CustomButton';

import { useStyles } from './SignIn.styles';

export default function SignIn() {
	const classes = useStyles();
	const [formData, setFormData] = useState({ email: '', password: '' });

	const { email, password } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setFormData({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Grid container justify='center' className={classes.signInWrapper}>
			<Grid item sm={8} align='center' className={classes.signIn}>
				{' '}
				<h2> I already have an account </h2>{' '}
				<span> Sign in with your email and password </span>{' '}
				<form onSubmit={handleSubmit}>
					<FormInput
						name='email'
						type='email'
						placeholder='Email'
						required
						label='required'
						value={email}
						onChange={handleChange}
					/>{' '}
					<FormInput
						id='filled-password-input'
						label='Password'
						type='password'
						autoComplete='current-password'
						placeholder='Password'
						password={password}
						onChange={handleChange}
						required
					/>{' '}
					<Grid container direction='row' justify='space-evenly'>
						<Grid item className={classes.buttons}>
							<CustomButton type='submit'> sign in </CustomButton>{' '}
						</Grid>{' '}
						<Grid item className={classes.buttons}>
							<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
								sign in with google{' '}
							</CustomButton>{' '}
						</Grid>{' '}
					</Grid>{' '}
				</form>{' '}
			</Grid>{' '}
		</Grid>
	);
}
