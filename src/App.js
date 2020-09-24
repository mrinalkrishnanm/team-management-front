import { Router } from '@material-ui/icons';
import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard.js';
import SideBar from './Components/SideBar/SideBar.js';
import Teammate from './Components/Teammate/Teammate.js';
import Signup from './Components/Signup/Signup.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <AuthContextProvider>
        <SideBar />
        <Route path ='/dashboard' component={Dashboard} />
        <Route path ='/teammate' component={Teammate} />
        <Route path ='/signup' component={Signup} />
      </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
