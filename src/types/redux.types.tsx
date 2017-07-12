import { RouterState } from 'react-router-redux';

export interface IStoreState {
    counterState: ICounterState;
    router: RouterState;
}

export interface ICounterState {
    counter: number;
    asyncInProgress: boolean;
}