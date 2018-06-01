import React from 'react';
import{ render }from 'react-dom';

const App = () => (
  <div className="app">
    <div className="landing">
      <h1>hMusic App</h1>
      <input type="text" placeholder="Search" />
    </div>
  </div>
);

render(<App />, document.getElementById('app'));
