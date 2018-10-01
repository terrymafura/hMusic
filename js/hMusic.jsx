import React from 'react';
import{ render }from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './Search';
import Home from './Home';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
