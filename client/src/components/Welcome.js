import React from 'react';
import { Button } from 'reactstrap';

const Welcome = props => {
  const { buttonStyles, containerStyle } = styles;
  return (
    <div style={containerStyle}>
      <Button
        color="primary"
        style={buttonStyles}
        onClick={() => props.history.push('/signup')}
      >
        Create Account
      </Button>
      <Button
        color="primary"
        style={buttonStyles}
        onClick={() => props.history.push('/signin')}
      >
        Sign In
      </Button>
    </div>
  );
};

const styles = {
  containerStyle: {
    margin: '15px',
  },
  buttonStyles: {
    width: '150px',
    margin: '10px 10px',
  },
};

export { Welcome };
