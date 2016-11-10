import React from 'react';
import { render } from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Hello = () => (
  <div>
    <h1>Hello World</h1>
    <Button>Click Me!</Button>
  </div>
);

render(<Hello />, document.getElementById('app'));

