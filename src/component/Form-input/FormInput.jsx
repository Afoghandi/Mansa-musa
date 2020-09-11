import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import { useStyles } from './FormInput.styles';

export default function FormInput({ handleChange, ...otherProps }) {
	const classes = useStyles();
	return (
		<Fragment>
			<Grid container className={classes.formGroupWrapp}>
				<Grid item className={classes.formInput}>
					{' '}
					<TextField
						onChange={handleChange}
						{...otherProps}
						className={classes.formInput}
					/>{' '}
				</Grid>{' '}
			</Grid>{' '}
		</Fragment>
	);
}
