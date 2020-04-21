import React from 'react';
import Homepage from './page components/homepage/homepagecomponents';
import './App.css';
import Shoppage from './page components/shop/shop.components';
import Header from './components/header/headercompo';
import { Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={Shoppage}/>
      </Switch>
      
    </div>
  );
}

export default App;
