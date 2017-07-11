import * as React from 'react';
import './header.component.css';
import { Link } from 'react-router-dom';

class Header extends React.Component<{}, {}> {
    render() {
        return (
            <div className="prefix-header">
                <h1>Header</h1>
                <h3><Link to="/">Navigate home</Link></h3>
                <h3><Link to="/component-1">Navigate to Component 1</Link></h3>
                <h3><Link to="/component-2">Navigate to Component 2</Link></h3>
            </div>
        );
    }
}

export default Header;
