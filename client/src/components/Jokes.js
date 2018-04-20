import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
  state = {
    authorized: false,
    jokes: [],
  };

  componentDidMount() {}

  authorized = () => {
    if (this.state.authorized) {
      return <div>You are Authorized to be here</div>;
    }
    return <div>You are NOT Authorized to be here.</div>;
  };

  render() {
    return this.authorized();
  }
}

export { Jokes };
