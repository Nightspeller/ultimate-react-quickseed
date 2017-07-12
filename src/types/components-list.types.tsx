export interface IComponentsListProps {
    counter: number;
    asyncInProgress: boolean;
    onIncrementSync: () => void;
    onDecrementSync: () => void;
    onIncrementAsync: (param?: number) => void;
    onDecrementAsync: (param?: number) => void;
}