import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';
import axios from 'axios';

class Signin extends Component {
  state = {
    username: '',
    password: '',
  };
  render() {
    const { formStyles } = styles;
    return (
      <Form onSubmit={this.submit} style={formStyles}>
        <FormGroup row>
          <Label for="username" sm={2}>
            Email
          </Label>
          <Col>
            <Input
              required
              onChange={this.handleInput}
              value={this.state.username}
              type="username"
              name="username"
              id="username"
              placeholder="username"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={2}>
            Password
          </Label>
          <Col>
            <Input
              required
              onChange={this.handleInput}
              value={this.state.password}
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Button color="primary">Sign In</Button>
        </FormGroup>
      </Form>
    );
  }

  submit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/login', this.state)
      .then(response => {
        localStorage.setItem('authToken', response.data.token);
        alert('Login was successful.  Enjoy the jokes!');
        this.props.history.push('/jokes');
      })
      .catch(err => {
        alert('There was an issue while loggin you in.  Please try again.');
      });
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
}

export { Signin };

const styles = {
  formStyles: {
    width: '80%',
    margin: 'auto',
  },
};
