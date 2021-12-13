
// Neceita mas modificaciones
import React from 'react';
//import UsoDeMoment from "./component/UsoDeMoment"

import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from './pages/Home';
import RegisterForm from './component/RegisterForm';
import Login from './component/Login';
import UserList from './pages/UserList';
import Layout from './component/Layout'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  
  return (


    // este es es el enrrutador 
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login-user" component={Login} />
              <Route exact path="/sing-up-user" component={RegisterForm} />
              <Route exact path="/list-of-users" component={UserList} />
              
          </Switch>
        </Layout>
  </BrowserRouter>
  
     
     
  );   
  
}

export default App;
