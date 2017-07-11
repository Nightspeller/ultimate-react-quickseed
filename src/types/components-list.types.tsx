export interface ComponentsListProps {
    counter: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
    onIncrementAsync?: () => void;
    onDecrementAsync?: () => void;
}