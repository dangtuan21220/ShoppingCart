import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';


InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const {form, name, label, disabled} = props;
    const {formState} = form;
    const {errors} = formState
    const hasErrors = errors[name];
    //console.log(errors[name], touchedFields[name]);

    return (
        <Controller 
            render={({ field }) => <TextField
                {...field} 
                fullWidth 
                label={label} 
                disabled={disabled}  
                variant="outlined"
                margin="normal"
                

                error={hasErrors}
                helperText={errors[name]?.message}
            />}
            
            control={form.control}
            name={name}  
        />   
    );
}

export default InputField;