import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeStyles } from '@material-ui/core/styles';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import Title from '../../ui/Title';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

function Directory({ sections }) {
	const classes = useStyles();

	return (
		<Fragment>
			<Title title=' Featured Products' />{' '}
			<div className={classes.directoryWrapper}>
				{' '}
				{sections.map((image) => (
					<ButtonBase
						focusRipple
						key={image.title}
						className={classes.image}
						focusVisibleClassName={classes.focusVisible}
						style={{
							width: image.width,
						}}
					>
						<span
							className={classes.imageSrc}
							style={{
								backgroundImage: `url(${image.url})`,
							}}
						/>{' '}
						<span className={classes.imageBackdrop} />{' '}
						<span className={classes.imageButton}>
							<Typography
								component='span'
								variant='subtitle1'
								color='inherit'
								className={classes.imageTitle}
							>
								{image.title} <span className={classes.imageMarked} />{' '}
							</Typography>{' '}
						</span>{' '}
					</ButtonBase>
				))}{' '}
			</div>{' '}
		</Fragment>
	);
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
//styles
const useStyles = makeStyles((theme) => ({
	directoryWrapper: {
		display: 'flex',
		flexWrap: 'wrap',
		minWidth: 300,
		width: '100%',
		marginTop: '3em',
	},
	image: {
		position: 'relative',
		height: 400,
		[theme.breakpoints.down('xs')]: {
			width: '50% !important', // Overrides inline-style
			height: 100,
		},
		[theme.breakpoints.down('md')]: {
			width: '50% !important', // Overrides inline-style
			height: 100,
		},
		'&:hover, &$focusVisible': {
			zIndex: 1,
			'& $imageBackdrop': {
				opacity: 0.15,
			},
			'& $imageMarked': {
				opacity: 0,
			},
			'& $imageTitle': {
				border: '4px solid currentColor',
			},
		},
	},
	focusVisible: {},
	imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		fontSize: '1.1rem !important',
		textTransform: 'uppercase',
		fontFamily: 'Open Sans Condensed !important',
		fontWeight: 'bolder !important',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.secondary.main,
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%',
	},
	imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.primary.main,
		opacity: 0.4,
		transition: theme.transitions.create('opacity'),
	},
	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
			theme.spacing(1) + 6
		}px`,
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
		transition: theme.transitions.create('opacity'),
	},
}));
