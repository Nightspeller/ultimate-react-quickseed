import * as React from 'react';
import './app.component.css';
import Header from '../header/header.component';
import ComponentsList from '../../containers/components-list.container';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className="prefix-app">
                <Header/>
                <ComponentsList/>
            </div>
        );
    }
}

export default App;
