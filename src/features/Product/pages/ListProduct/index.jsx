import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import productApi from 'api/productApi';


ListProduct.propTypes = {
    
};

const useStyles = makeStyles(theme => ({
    root:{},
    left: {
        width: '250px'
    },
    right: {
        flex: '1 1 auto'
    },
}));


function ListProduct(props) {
    const classes = useStyles();

    useEffect(() => {
        (async () => {
            const response = await productApi.getAll({ _page: 1, _limit: 3 });
            console.log({response});
        })();
        
    }, []);

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>Left</Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>Right</Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListProduct;