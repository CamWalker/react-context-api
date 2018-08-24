import React from 'react';
import storeInjector from './storeInjector';

class LayerX extends React.Component {

  handleClick = (e) => {
    this.props.store.increment += 1;
    e.stopPropagation();
  }

  render() {
    console.log(this.props.layer)
    return (
      <div>
        <div onClick={this.handleClick}>
          Layer {this.props.layer + this.props.store.increment}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default storeInjector(LayerX);