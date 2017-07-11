import * as React from 'react';
import './component-1.component.css';

class Component1 extends React.Component<{counter: number}, {}> {
    render() {
        const { counter } = this.props;

        return (
            <div className="prefix-component-1">
                Component 1 says: counter is {counter}
            </div>
        );
    }
}

export default Component1;
