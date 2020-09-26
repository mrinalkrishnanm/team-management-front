import { Router } from '@material-ui/icons';
import React, { useContext } from 'react';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Teammate from './Components/Teammate/Teammate.js';
import Signup from './Components/Signup/Signup.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { AuthContextProvider, AuthContext } from './Context/AuthContext';
import PrivateRoute from './Components/Utils/PrivateRoute/PrivateRoute';
function App() {
  const currentUser = useContext(AuthContext);
  return (
    <BrowserRouter>
      <div className="App">
      <AuthContextProvider>
        <PrivateRoute path ='/dashboard' component={Dashboard} />
        <PrivateRoute path ='/teammate' component={Teammate} />
        <Route path ='/signup' component={Signup} /> 
      </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
