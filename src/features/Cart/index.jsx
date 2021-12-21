import React from 'react';
import PropTypes from 'prop-types';
import { cartTotalSelector } from './selectors';
import { useSelector } from 'react-redux';

CartFeature.propTypes = {
    
};

function CartFeature(props) {
    const cartTotal = useSelector(cartTotalSelector)
    return (
        <div>
            CartFeature {cartTotal}
        </div>
    );
}

export default CartFeature;