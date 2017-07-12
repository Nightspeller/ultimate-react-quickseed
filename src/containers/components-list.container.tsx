import ComponentsList from '../components/components-list/components-list.component';
import * as actions from '../actions/counter.actions';
import { IStoreState } from '../types/redux.types';
import { connect, Dispatch } from 'react-redux';
import { Action } from 'redux-actions';
import { withRouter } from 'react-router-dom';

export function mapStateToProps({ counterState }: IStoreState) {
    return counterState;
}

export function mapDispatchToProps(dispatch: Dispatch<Action<number>>) {
    return {
        onIncrementSync: () => dispatch(actions.incrementCounterSync()),
        onDecrementSync: () => dispatch(actions.decrementCounterSync()),
        onIncrementAsync: (param?: number) => dispatch(actions.incrementCounterAsync(param)),
        onDecrementAsync: (param?: number) => dispatch(actions.decrementCounterAsync(param)),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComponentsList) as any);