import React, {  } from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: '1px solid #eee',
  },
  list: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
  },
}));

FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
  const classes = useStyles();
  const handleChange = (e) => {

    if (onChange) {
      const {name, checked} = e.target;
      onChange({[name] : checked});
    }
    
  }
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>

      <ul className={classes.list}>
        {[
          { id: 1, value: 'isPromotion', label: 'Có khuyến mại' },
          { id: 2, value: 'isFreeShip', label: 'Vận chuyển miễn phí' },
        ].map((service) => (
          <li key={service.id}>
            <FormControlLabel
              label={service.label}
              control={
                <Checkbox 
                  checked={filters[service.value]} 
                  onChange={handleChange}
                  name={service.value}
                  color="primary" />
              }
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
