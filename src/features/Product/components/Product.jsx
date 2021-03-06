import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { THUMBNAIL_PLACEHOLDER, STATIC_HOST } from 'constants/index';
import { useHistory } from 'react-router';
import { formatPrice } from 'utils';

Product.propTypes = {
    product: PropTypes.object,
};

function Product(props) {
    const history = useHistory();
    const { product } = props;
    const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

    const handleClick = () => {
        // Navigate to Product Details: /products/:productId
        history.push(`/products/${product.id}`);
    }
    return (
        <Box style={{cursor: 'pointer'}} padding={1} onClick={handleClick}>
            <Box padding={1} minHeight="213px">
                <img src={thumbnailUrl} alt={product.name} width="100%" />
            </Box>
            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                    {formatPrice(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ``}
            </Typography>
        </Box>
    );
}

export default Product;