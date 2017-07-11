import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';

import {
    DECREMENT_COUNTER_ASYNC,
    DECREMENT_COUNTER_SYNC,
    INCREMENT_COUNTER_ASYNC,
    INCREMENT_COUNTER_SYNC
} from '../constants/actions.constants';

export const incrementCounterSync = createAction(INCREMENT_COUNTER_SYNC);
export const decrementCounterSync = createAction(DECREMENT_COUNTER_SYNC);

export const incrementCounterAsync = createActionThunk(
    INCREMENT_COUNTER_ASYNC,
    (param?: number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(param); }, 2000);
        });
    }
);
export const decrementCounterAsync = createActionThunk(
    DECREMENT_COUNTER_ASYNC,
    (param?: number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(param); }, 2000);
        });
    }
);