import {  } from '../actions/counter.actions';
import { ICounterState } from '../types/redux.types';
import {
    DECREMENT_COUNTER_SYNC,
    INCREMENT_COUNTER_ASYNC,
    DECREMENT_COUNTER_ASYNC,
    INCREMENT_COUNTER_SYNC
} from '../constants/actions.constants';
import { Action } from 'redux-actions';

// TODO: proper init initial state
export function counterReducer(
    state: ICounterState = {counter: 0, asyncInProgress: false},
    action: Action<number>
): ICounterState {
    switch (action.type) {
        case INCREMENT_COUNTER_SYNC:
            return { ...state, counter: state.counter + (action.payload || 1) };
        case DECREMENT_COUNTER_SYNC:
            return { ...state, counter: state.counter - (action.payload || 1) };
        case INCREMENT_COUNTER_ASYNC + '_STARTED':
            return { ...state, asyncInProgress: true };
        case INCREMENT_COUNTER_ASYNC + '_SUCCEEDED':
            return { ...state, counter: state.counter + (action.payload || 1) };
        case INCREMENT_COUNTER_ASYNC + '_ENDED':
            return { ...state, asyncInProgress: false };
        case DECREMENT_COUNTER_ASYNC + '_STARTED':
            return { ...state, asyncInProgress: true };
        case DECREMENT_COUNTER_ASYNC + '_SUCCEEDED':
            return { ...state, counter: state.counter - (action.payload || 1) };
        case DECREMENT_COUNTER_ASYNC + '_ENDED':
            return { ...state, asyncInProgress: false };
        default:
            return state;
    }
}