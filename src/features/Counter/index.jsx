import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import styles from './styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 30px',
  },
});

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter)

    const handleIncreaseClick = () => {
        const action = increase(2);
        //console.log(action);
        dispatch(action);
    }

    const handleDecreaseClick = () => {
        const action = decrease();
        //console.log(action);
        dispatch(action);
    }
    return (
        <div className={styles.counter}>
            Counter: {count}

            <div>
                <Button className={classes.root} onClick={handleIncreaseClick}>Increase</Button>
                <Button className={classes.root} onClick={handleDecreaseClick}>Decrease</Button>
            </div>
        </div>
    );
}

export default CounterFeature;