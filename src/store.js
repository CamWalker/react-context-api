import React from 'react';

class Statex {
  constructor(data) {
    this.subscribers = [];
    for (var key in data) {
      this[key] = data[key];
    }
  }

  subscribe(cb) {
    this.subscribers.push(cb);
  }

  react() {
    this.subscribers.forEach(cb => {
      cb();
    });
  }
}

const storeDefault = new Statex({
  increment: 0,
  subscribers: [],
});

const handler = {
  set: function(store, key, value) {
    store[key] = value;
    store.react();
    return true;
  },
  get: function(store, key) {
    return store[key];
  }
};

export const store = new Proxy(storeDefault, handler)

export const StoreContext = React.createContext(store)