import React from 'react';
import { render } from 'react-dom';

const Hello = () => (
  <h1>Hello World</h1>
);

render(<Hello />, document.getElementById('app'));

