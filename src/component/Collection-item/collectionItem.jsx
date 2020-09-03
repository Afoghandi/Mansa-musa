import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/paper';

const CollectionItems = ({ id, name, price, imageUrl }) => {
	const classes = useStyles();

	return (
		<Paper className={classes.collectionItem}>
			<div
				className={classes.image}
				style={{ backgroundImage: `url(../${imageUrl})` }}
			/>

			<div className={classes.collectionFooter}>
				<span className={classes.name}>{name} </span>
				<span className={classes.price}>£{price} </span>
			</div>
		</Paper>
	);
};
const useStyles = makeStyles((theme) => ({
	collectionItem: {
		marginTop: '10px',
		marginLeft: '20px',
		marginRight: '20px',
		width: '22%',
		display: 'flex',
		flexDirection: 'column',
		height: '370px',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: '95%',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		marginBottom: '5px',
	},
	collectionFooter: {
		width: '100%',
		height: '5%',
		display: ' flex',
		justifyContent: 'space-between',
		fontSize: '18px',
	},
	name: {
		width: '85%',
		marginBottom: '20px',
		marginLeft: '5px',
	},

	price: {
		width: '15%',
	},
}));
export default CollectionItems;
