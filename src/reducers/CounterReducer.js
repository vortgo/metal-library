import {COUNTER_DECREMENT, COUNTER_INCREMENT} from "../actions/ActionTypes";

const initialState = {
    count: 0
};

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}
export default CounterReducer;