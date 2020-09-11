import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import Title from '../../ui/Title';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './Directory.styles';
function Directory({ sections, history, match }) {
	const classes = useStyles();

	return (
		<Fragment>
			<Title title=' Featured Products' />{' '}
			<div className={classes.directoryWrapper}>
				{' '}
				{sections.map((item) => {
					const { width, url, title, linkUrl } = item;

					return (
						<ButtonBase
							focusRipple
							key={title}
							className={classes.image}
							focusVisibleClassName={classes.focusVisible}
							style={{
								width: width,
							}}
							onClick={() => history.push(`${match.url}${linkUrl}`)}
						>
							<span
								className={classes.imageSrc}
								style={{
									backgroundImage: `url(${url})`,
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
									{title} <span className={classes.imageMarked} />{' '}
								</Typography>{' '}
							</span>{' '}
						</ButtonBase>
					);
				})}{' '}
			</div>{' '}
		</Fragment>
	);
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});
export default withRouter(connect(mapStateToProps)(Directory));
//styles
