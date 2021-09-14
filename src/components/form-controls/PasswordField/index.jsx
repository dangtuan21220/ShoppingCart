import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  const { formState } = form;
  const { errors } = formState;
  const hasErrors = errors[name];
  const [showPassword, setShowPassword] = useState(false)
  //console.log(errors[name], touchedFields[name]);

  const toggleShowPassword = () => {
      setShowPassword(x => !x)
  }

  return (
    <div>

        <FormControl error={hasErrors} fullWidth style={{width: "50ch"}}  margin="normal" variant="outlined">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            
            <Controller
                control={form.control}
                name={name}
                disabled={disabled}
                render={({ field }) => <OutlinedInput 
                    {...field} 
                    id={name}
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    label={label}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleShowPassword}
                            edge="end"
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
        
                />}
            />

            <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
    </div>
  );
}

export default PasswordField;
