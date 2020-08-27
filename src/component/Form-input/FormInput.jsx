import React, { Fragment } from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default function FormInput({ handleChange, label, ...otherProps }) {
	const classes = useStyles();
	return (
		<Fragment>
			<Grid container direction='column' className={classes.formGroupWrapp}>
				<Grid item>
					{' '}
					<TextField
						onChange={handleChange}
						{...otherProps}
						className={classes.formInput}
					/>
				</Grid>
			</Grid>
		</Fragment>
	);
}

const useStyles = makeStyles((theme) => ({
	formGroupWrapp: {
		position: 'relative',
		margin: '45px 0',
	},
	formInput: {
		width: '100%',
		fontSize: '18px',
	},
}));
