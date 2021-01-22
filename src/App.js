import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import Chat from './components/chat/chat.component';


import './App.css';
import Login from './components/login/login.component';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
          <Header />
          <div className="app__body">
            <Sidebar />

            <Switch>
            
              <Route path="/room/:roomId">
                <Chat />
              </Route>

              <Route path="/">
              
              </Route>
          
            </Switch>

          </div>
        </>
        )}

      </Router>
    
    </div>
  );
}

export default App;
