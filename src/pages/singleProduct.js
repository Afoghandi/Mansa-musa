import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../redux/cart/cart.selectors';

import SingleProductItem from '../component/SingleProductItem/SingleProductItem';

const SingleProduct = ({ cartItems }) => {
	return (
		<div>
			<h1> Hello from singular </h1>
			<SingleProductItem />
			{cartItems.map((item) => {
				console.log(item.price);
				return (
					<div key={item.id}>
						<h1>{item.name} </h1>{' '}
					</div>
				);
			})}
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});
export default connect(mapStateToProps)(SingleProduct);
