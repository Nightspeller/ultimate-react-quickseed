// TODO: there were no types for redux-thunk-actions, so i added this. It should be improved.
declare module "redux-thunk-actions" {
    function createActionThunk(
        type: string,
        fn: (...params: any[]) => any
    ): any;
}