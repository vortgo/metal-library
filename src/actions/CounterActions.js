
import * as Actions from './ActionTypes';

export const increment = () => ({type: Actions.COUNTER_INCREMENT});

export const decrement = () => {
    dispatch(increment());
    return {type: Actions.COUNTER_DECREMENT}
};