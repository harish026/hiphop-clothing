import React from 'react';
import Homepage from './page components/homepage/homepagecomponents';
import './App.css';
import { Switch,Route } from 'react-router-dom';

const Hats=()=>(
  <div><h1>HATS</h1></div>
)

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/Hats' component={Hats}/>
      </Switch>
      
    </div>
  );
}

export default App;
