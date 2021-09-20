import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {  } from 'react';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilters(props) {
    const { onChange, filters } = props;
    const handleCategoryChange = (newCategory) => {
        if(onChange) {
            const newFilters = {
                'category.id': newCategory.id,
            }
            const newCategoryName = newCategory.name;
            onChange(newFilters, newCategoryName);
            
        }
    };

    const handlePriceChange = (value) => {
        if (onChange) {
            onChange(value);
        }
    }

    const handleSerVerChange = (value) => {
        if (onChange) {     
            onChange(value);
        }
    }

    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
            <FilterByPrice onChange={handlePriceChange} />
            <FilterByService filters={filters} onChange={handleSerVerChange} />
        </Box>
    );
}

export default ProductFilters;