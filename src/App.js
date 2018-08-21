import React, { Component } from 'react';
import Level1 from './Level1';
import StoreContext, { store } from './store';

class App extends Component {
  render() {
    return (
      <StoreContext.Provider value={store}>
        <div>
          <Level1 />
        </div>
      </StoreContext.Provider>
    );
  }
}

export default App;
