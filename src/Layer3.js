import React from 'react';
import storeInjector from './storeInjector';

class Layer3 extends React.Component {

  handleClick = () => {
    this.props.store.increment -= 1;
  }

  render() {
    console.log(3)
    return (
      <div>
        <div onClick={this.handleClick}>
          Layer {3 + this.props.store.increment}
        </div>
      </div>
    );
  }
}

export default storeInjector(Layer3);