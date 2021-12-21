import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { formatPrice } from 'utils';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
    borderBottom: '1px solid #F2F2F2',
  },

  description: {
    margin: theme.spacing(2, 0),
  },

  priceBox: {
    padding: theme.spacing(2),
    backgroundColor: '#FAFAFA',
  },

  salePrice: {
    marginRight: theme.spacing(3),
    fontSize: theme.typography.h4.fontSize,
    fontWeight: '650',
    color: '#FF424E',
  },

  originalPrice: {
    marginRight: theme.spacing(1),
    textDecoration: 'line-through',
    color: '#808089'
  },

  promotionPercent: {
    color: '#FF424E',
    border: '1px solid #FF424E',
    paddingRight: '2px',
    backgroundColor: '#FFF0F1'
  }
}));

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const classes = useStyles();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  return (
    <Box className={classes.root}>
      <Typography component="h2" variant="h4">
        {name}
      </Typography>
      <Typography className={classes.description} variant="body2">
        {shortDescription}
      </Typography>

      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>

        {promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span" className={classes.promotionPercent}>
                {` -${promotionPercent}%`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
