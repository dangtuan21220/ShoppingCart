import { Box, FormHelperText, IconButton, makeStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {},

  quantity: {
    display: 'flex',
    maxWidth: '160px',
    height: '30px',
  },
}));

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label, disabled } = props;
  const { formState, setValue, getValues } = form;
  const { errors } = formState;
  const hasErrors = errors[name];


  return (
    <div>
      <FormControl error={hasErrors} fullWidth margin="normal" variant="outlined" size="small">
        <Typography>{label}</Typography>

        <Controller
          control={form.control}
          name={name}
          render={({ field }) => (
            <Box className={classes.quantity}>
              <IconButton onClick={() => setValue(name, Number.parseInt(getValues(name)) ? Number.parseInt(getValues(name)) - 1 : 1)}>
                <RemoveCircleOutline />
              </IconButton>

              <OutlinedInput {...field} id={name} fullWidth type="text" disabled={disabled} size="small" />

              <IconButton onClick={() => setValue(name, Number.parseInt(getValues(name)) ? Number.parseInt(getValues(name)) + 1 : 1)}>
                <AddCircleOutline />
              </IconButton>
            </Box>
          )}
        />

        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default QuantityField;
