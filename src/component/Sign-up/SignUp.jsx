import React, { useState } from 'react';

import { Grid } from '@material-ui/core';
import FormInput from '../Form-input/FormInput';
import { useStyles } from './SignUp.styles';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../../ui/CustomButton';

export default function SignUp() {
	const classes = useStyles();
	const [formData, setFormData] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const { displayName, email, password, confirmPassword } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert(`'password doesn't match`);
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });

			setFormData({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Grid container justify='center' className={classes.signUpWrapper}>
			<Grid item sm={6} className={classes.signUp}>
				<h2>I do not have an account</h2>{' '}
				<span>Sign up with your email and password</span>{' '}
				<form onSubmit={handleSubmit}>
					<FormInput
						name='displayName'
						type='name'
						required
						label='required'
						placeholder='Display Name'
						value={displayName}
						onChange={handleChange}
					/>{' '}
					<FormInput
						name='email'
						type='email'
						required
						label='required'
						placeholder='Email'
						value={email}
						onChange={handleChange}
					/>{' '}
					<FormInput
						id='filled-password-input'
						name='password'
						label='Password'
						type='password'
						autoComplete='current-password'
						placeholder='Password'
						required
						value={password}
						onChange={handleChange}
					/>{' '}
					<FormInput
						id='standard-password-input'
						name='confirmPassword'
						label='Password'
						type='password'
						required
						autoComplete='current-password'
						placeholder='Confrim Password'
						value={confirmPassword}
						onChange={handleChange}
					/>{' '}
					<Grid container direction='row' justify='space-evenly'>
						<Grid item>
							<CustomButton type='submit'>sign up</CustomButton>{' '}
						</Grid>
					</Grid>
				</form>
			</Grid>{' '}
		</Grid>
	);
}
