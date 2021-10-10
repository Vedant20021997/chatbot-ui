import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chatbot1 from './components/Chat1/Chatbot1';
import Chatbot2 from './components/Chat2/Chatbot2';
import Chatbot3 from './components/Chat3/Chatbot3';
import Chatbot4 from './components/Chat4/Chatbot4';
import Landing from './components/Landing/Landing';
import './App.css';

const App = () => {

  const [model, setModel] = useState("");

  return (
        
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <Landing setModel={setModel}/>
              </Route>
              <Route path="/chat1" exact>
                <Chatbot1 model={model}/>
              </Route>
              <Route path="/chat2" exact>
                <Chatbot2 model={model}/>
              </Route>
              <Route path="/chat3" exact>
                <Chatbot3 model={model}/>
              </Route>
              <Route path="/chat4" exact>
                <Chatbot4 model={model}/>
              </Route>
            </Switch>
          </BrowserRouter>
  )
};

export default App;
