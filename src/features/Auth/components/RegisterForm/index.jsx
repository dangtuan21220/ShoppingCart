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

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
    onSubmit: null,
}

function RegisterForm(props) {
    const classes = useStyles();

    const schema = yup.object().shape({
        fullName: yup.string()
        .required('Please enter your full name.')
        .test('should has at least two words', 'Please enter at least two words.', (value) => {
            return value.split(' ').length >= 2;
        }),

        email: yup.string()
        .required('Please enter your email.')
        .email('Please enter a valid email address.'),

        password: yup.string()
        .required('Please enter your password')
        .min(6, 'Please enter at least 6 characters.'),

        retypePassword: yup.string()
        .required('Please retype your password.')
        .oneOf([yup.ref('password')], 'Password does not match.'),

    });
    

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
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
                Sign Up
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePassword" label="Retype Password" form={form} />

                <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={isSubmitting}
                    size="large"
                >
                    Sign Up
                </Button>
            </form>
        </div>
        
    );
}

export default RegisterForm;