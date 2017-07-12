import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ComponentsList from './components-list.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComponentsList
      counter={0}
      asyncInProgress={false}
      onIncrementSync={()=>{}}
      onDecrementSync={()=>{}}
      onIncrementAsync={()=>{}}
      onDecrementAsync={()=>{}}
    />,
    div);
});
