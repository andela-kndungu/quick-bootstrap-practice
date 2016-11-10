import React from 'react';
import { render } from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'; // eslint-disable-line
import { Button } from 'react-bootstrap';

require('./hello.scss');

const Hello = () => (
  <div className="hello">
    <h1>Hello World</h1>
    <Button>Click Me!</Button>
  </div>
);

render(<Hello />, document.getElementById('app'));

