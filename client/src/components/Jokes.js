import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
  state = {
    authorized: false,
    jokes: [],
  };

  componentDidMount() {
    const token = localStorage.getItem('authToken');
    console.log(token, 'token');
    const auth = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .get('http://localhost:5000/api/jokes', auth)
      .then(response => {
        console.log(response.data);
        this.setState({ jokes: response.data, authorized: true });
      })
      .catch(err => console.log(err));
  }

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
