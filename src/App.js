import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat/Chatbot';
import Landing from './components/Landing/Landing';
import './App.css';

const App = () => {

  return (
        
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <Landing/>
              </Route>
              <Route path="/chat" exact>
                <Chat/>
              </Route>
            </Switch>
          </BrowserRouter>
  )
};

export default App;
