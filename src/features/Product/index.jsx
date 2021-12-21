import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListProduct from './pages/ListProduct';
import { Box } from '@material-ui/core';
import ProductDetail from './pages/ProductDetail';


function ProductFeature() {
    const match = useRouteMatch();
    console.log("match: ", match);

    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.path} exact component={ListProduct} />
                <Route path={`${match.path}/:productId`} component={ProductDetail} />
            </Switch>
        </Box>
    );
}

export default ProductFeature;