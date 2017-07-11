export interface IStoreState {
    counterStore: ICounterStore;
}

export interface ICounterStore {
    counter: number;
    asyncInProgress: boolean;
}