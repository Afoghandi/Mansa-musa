import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import FormInput from '../Form-input/FormInput';
import CustomButton from '../../ui/CustomButton';

export default function SignUp() {
	const classes = useStyles();

	return (
		<Grid container justify='center' className={classes.signUpWrapper}>
			<Grid item sm={6} className={classes.signUp}>
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
						placeholder='Confrim Password'
					/>{' '}
					<Grid container direction='row' justify='space-evenly'>
						<Grid item spacing={2}>
							<CustomButton>sign up</CustomButton>{' '}
						</Grid>
					</Grid>
				</form>
			</Grid>{' '}
		</Grid>
	);
}

const useStyles = makeStyles((theme) => ({
	signUpWrapper: {
		width: '800px',
		display: 'flex',
		[theme.breakpoints.down('md')]: {
			width: '800px',
			marginLeft: '-20em',
		},
		[theme.breakpoints.down('sm')]: {
			width: '800px',
			marginLeft: '-25em',
		},
	},

	signUp: {},
}));
