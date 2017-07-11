import ComponentsList from '../components/components-list/components-list.component';
import * as actions from '../actions/counter.actions';
import { IStoreState } from '../types/redux.types';
import { connect, Dispatch } from 'react-redux';
import { Action } from 'redux-actions';

export function mapStateToProps({ counterStore }: IStoreState) {
    return counterStore;
}

export function mapDispatchToProps(dispatch: Dispatch<Action<number>>) {
    return {
        onIncrementSync: () => dispatch(actions.incrementCounterSync()),
        onDecrementSync: () => dispatch(actions.decrementCounterSync()),
        onIncrementAsync: (param?: number) => dispatch(actions.incrementCounterAsync(param)),
        onDecrementAsync: (param?: number) => dispatch(actions.decrementCounterAsync(param)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsList);