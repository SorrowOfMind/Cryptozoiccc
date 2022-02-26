import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import {Typography, Space, Layout} from 'antd';

import {Navbar} from './components';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar /> 
      </div>
      <main className="main">

      </main>
      <footer className="footer">

      </footer>
    </div>
  )
}

export default App