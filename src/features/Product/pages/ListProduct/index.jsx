import React, { useEffect, useMemo, useState } from 'react';
import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import productApi from 'api/productApi';
import ProductSkeletonList from 'features/Product/components/ProductSkeletonList';
import ProductList from 'features/Product/components/ProductList';
import { Pagination } from '@material-ui/lab';
import ProductSort from 'features/Product/components/ProductSort';
import ProductFilters from 'features/Product/components/ProductFilters';
import FilterViewer from 'features/Product/components/FilterViewer';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string'

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
  },
  header: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  },
}));

function ListProduct(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 16,
      _sort: params._sort || 'salePrice:ASC',
    }
  }, [location.search]);

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('Tất cả sản phẩm');
  // const [filters, setFilters] = useState({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 16,
  //   _sort: queryParams._sort || 'salePrice:ASC',
  // });
  const [pagination, setPagination] = useState({
    total: 10,
    limit: 16,
    page: 1,
  });

  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(queryParams),
    })
  }, [history,queryParams])

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch all products', error);
      }

      setLoading(false);
    })();
  }, [queryParams]);

  const handlePageChange = (e, page) => {
    // setFilters((prevFilter) => ({
    //   ...prevFilter,
    //   _page: page,
    // }));

    const filters = {
      ...queryParams,
      _page: page,
    }

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    })
  };

  const handleSortChange = (newSortValue) => {
    // setFilters((prevFilter) => ({
    //   ...prevFilter,
    //   _sort: newSortValue,
    // }));

    const filters = {
      ...queryParams,
      _sort: newSortValue,
    }

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    })
  };

  const handleFiltersChange = (newFilters, newCategoryName) => {
    setCategoryName(newCategoryName);
    // setFilters((prevFilter) => ({
    //   ...prevFilter,
    //   ...newFilters,
    // }));

    const filters = {
      ...queryParams,
      ...newFilters,
    }

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    })
  };

  const setNewFilter = (newFilters) => {
    // setFilters(newFilters);

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    })
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters filters={queryParams} onChange={handleFiltersChange} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <Typography variant="h5" className={classes.header}>
                {categoryName}
              </Typography>

              <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
              <FilterViewer filters={queryParams} onChange={setNewFilter} />

              {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}

              <Box className={classes.pagination} mt={3} pb={1}>
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  color="primary"
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListProduct;
