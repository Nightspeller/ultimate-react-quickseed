import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Component1 from './components-list.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Component1 />, div);
});
