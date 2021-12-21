import React from 'react';
import PropTypes from 'prop-types';
//import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from 'components/form-controls/InputField';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-controls/PasswordField';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        padding: theme.spacing(4, 2, 1, 2),
    },
    avatar: {
      backgroundColor: theme.palette.secondary.main,
      margin: '0 auto',

    },
    title:{
        textAlign: 'center',
        margin: theme.spacing(1, 0, 2, 0),
    },
    submit: {
      margin: theme.spacing(3, 0, 3, 0),
    },
    progress: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0,
    }
  }));

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
    onSubmit: null,
}

function LoginForm(props) {
    const classes = useStyles();

    const schema = yup.object().shape({
        

        identifier: yup.string()
        .required('Please enter your email.')
        .email('Please enter a valid email address.'),

        password: yup.string()
        .required('Please enter your password'),   

    });
    

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },

        resolver: yupResolver(schema)
    });

    const handleSubmit = async (values) => {
        //console.log('Form Submit: ', values);
        const {onSubmit} = props;
        if(onSubmit) {
            await onSubmit(values);
        }

    };

    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress} />}

            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography className={classes.title} component="h1" variant="h5">
                Sign In
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                

                <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={isSubmitting}
                    size="large"
                >
                    Sign In
                </Button>
            </form>
        </div>
        
    );
}

export default LoginForm;