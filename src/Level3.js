import React from 'react';
import StoreContext from './store';

const Level3 = () => (
  <StoreContext.Consumer>
    {(store) => (
      <div onClick={() => store.updateText('peach')}>
        Level 3
        {store.text}
      </div>
    )}
  </StoreContext.Consumer>
);

export default Level3;