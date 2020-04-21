import React from 'react';
import Homepage from './page components/homepage/homepagecomponents';
import './App.css';
import Shoppage from './page components/shop/shop.components';
import Header from './components/header/headercompo';
import Signin from './page components/signin/signin' ;
import { Switch,Route } from 'react-router-dom';
import {auth} from './firebase/filebase';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    };
    
  }
  unsubscribefromauth=null;
  componentDidMount() {
    this.unsubscribefromauth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    });  
  }
  componentWillUnmount(){
    this.unsubscribefromauth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shoppage}/>
        <Route path='/signin' component={Signin}/>
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
