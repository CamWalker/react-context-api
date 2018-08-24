import React from 'react';
import Layer3 from './Layer3';
import LayerX from './LayerX';
import { store, StoreContext } from './store';

const Layer2 = () => (
  <div>
    Layer 2 {console.log(2)}
    <Layer3 />
  </div>
);

const Layer1 = () => (
  <div>
    Layer 1 {console.log(1)}
    <Layer2 />
  </div>
);

export default class App extends React.Component {

  render() {
    console.log('app');
    return (
      <StoreContext.Provider value={store}>
        <div>
          App
          <Layer1 />
          <LayerX layer={4}>
            <LayerX layer={5} />
          </LayerX> 
        </div>
      </StoreContext.Provider>
    )
  }
}