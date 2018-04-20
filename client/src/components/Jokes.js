import React, { Component } from 'react';
import axios from 'axios';
import { CardColumns, Card, CardHeader, CardText } from 'reactstrap';

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
        this.setState({ jokes: response.data, authorized: true });
      })
      .catch(err => console.log(err));
  }

  authorized = () => {
    const { headerStyle, textStyle, cardStyle } = styles;
    if (this.state.authorized) {
      return (
        <CardColumns>
          {this.state.jokes.map(joke => {
            return (
              <Card style={cardStyle}>
                <CardHeader style={headerStyle}>{joke.setup}</CardHeader>
                <CardText style={textStyle}>{joke.punchline}</CardText>
              </Card>
            );
          })}
        </CardColumns>
      );
    }
    return <div>You are NOT Authorized to be here.</div>;
  };

  render() {
    return this.authorized();
  }
}

const styles = {
  cardStyle: {
    height: '200px',
  },
  headerStyle: {
    height: '60%',
  },
  textStyle: {
    height: '40%',
  },
};

export { Jokes };
