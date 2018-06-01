import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="landing">
    <h1>hMusic App</h1>
    <input type="text" placeholder="Search" />
    <Link to="">View All</Link>
  </div>
);

export default Home;
