import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Component2 from './component-2.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Component2 />, div);
});
