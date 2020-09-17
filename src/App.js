import { Router } from '@material-ui/icons';
import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import SideBar from './Components/SideBar/SideBar.jsx';
import Teammate from './Components/Teammate/Teammate.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <SideBar />
      <Route path ='/dashboard' component={Dashboard} />
      <Route path ='/teammate' component={Teammate} />
      </div>
    </BrowserRouter>
  );
}

export default App;
