import React from 'react';

export const store = {
  text: 'pear',
  updateText: text => {
    console.log('updating to: ', text);
    this.text = text;
  },
};

export default React.createContext(store);