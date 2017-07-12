import * as React from 'react';
import { Route } from 'react-router-dom';

import './components-list.component.css';

import Component1 from './component-1/component-1.component';
import Component2 from './component-2/component-2.component';
import { IComponentsListProps } from '../../types/components-list.types';

class ComponentsList extends React.Component<IComponentsListProps, {}> {
    render() {
        const {
            counter,
            asyncInProgress,
            onIncrementSync,
            onDecrementSync,
            onIncrementAsync,
            onDecrementAsync
        } = this.props;
        const logo = require('../../assets/logo.svg');

        return (
            <div className="prefix-components-list">
                <h1>Component List</h1>

                <Route exact={true} path="/" render={() => <div>No components selected</div>}/>
                <Route path="/component-1" render={() => <Component1 counter={counter}/>}/>
                <Route path="/component-2" component={Component2}/>

                <button onClick={onIncrementSync}>Increment Sync</button>
                <button onClick={onDecrementSync}>Decrement Sync</button>
                <br/>
                <div hidden={asyncInProgress}>
                    <button onClick={() => onIncrementAsync(2)}>Increment Async</button>
                    <button onClick={() => onDecrementAsync(2)}>Decrement Async</button>
                </div>
                <div>
                    <img src={logo} className="prefix-spinner" alt="logo" hidden={!asyncInProgress}/>
                </div>
            </div>
        );
    }
}

export default ComponentsList;
