import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListProduct from './pages/ListProduct';
import { Box } from '@material-ui/core';

ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    const match = useRouteMatch();

    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.path} exact component={ListProduct} />
            </Switch>
        </Box>
    );
}

export default ProductFeature;