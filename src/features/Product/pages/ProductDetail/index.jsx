import React from 'react';
import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core';
import ProductThumbnail from 'features/Product/components/ProductThumbnail';
import { Route, Switch, useRouteMatch } from 'react-router';
import useProductDetail from 'features/Product/hooks/useProductDetail';
import ProductInfo from 'features/Product/components/ProductInfo';
import AddToCartForm from 'features/Product/components/AddToCartForm';
import ProductMenu from 'features/Product/components/ProductMenu';
import ProductDescription from 'features/Product/components/ProductDescription';
import ProductAdditional from 'features/Product/components/ProductAdditional';
import ProductReviews from 'features/Product/components/ProductReviews';
import { addToCart } from 'features/Cart/cartSlice';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5),
  },

  load: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
  },
}));

function ProductDetail() {
  const classes = useStyles();
  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  const dispatch = useDispatch();

  if (loading) {
    return (
      <Box className={classes.load}>
        <LinearProgress />
      </Box>
    );
  }

  const handleAddToCartSubmit = (formValues) => {
    // console.log('formValues', formValues);
    const action = addToCart({
      id: product.id,
      product,
      quantity: formValues.quantity,
    });
    console.log(action);
    dispatch(action);
  };

  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>

        <ProductMenu />
        <Switch>
          <Route path={url} exact>
            <ProductDescription product={product} />
          </Route>
          <Route path={`${url}/additional`}>
            <ProductAdditional />
          </Route>
          <Route path={`${url}/reviews`}>
            <ProductReviews />
          </Route>
        </Switch>
      </Container>
    </Box>
  );
}

export default ProductDetail;
