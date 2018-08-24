import React from 'react';
import { StoreContext, store } from './store';

const storeInjector = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.forceUpdate = this.forceUpdate.bind(this)
      store.subscribe(this.forceUpdate);
    }

    render() {
      return (
        <StoreContext.Consumer>
          {store => (
            <Component {...this.props} store={store} />
          )}
        </StoreContext.Consumer>
      );
    }
  }
}

export default storeInjector;