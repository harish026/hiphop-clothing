import React from 'react';
import Homepage from './page components/homepage/homepagecomponents';
import './App.css';
import Shoppage from './page components/shop/shop.components';
import Header from './components/header/headercompo';
import Signin from './page components/signin/signin' ;
import { Switch,Route } from 'react-router-dom';
import {auth,createUserdoc} from './firebase/firebase';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    };
    
  }
  unsubscribeFromAuth=null;
  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if (userAuth){
        const userref=await createUserdoc(userAuth);

        userref.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      this.setState({currentUser:userAuth});
      //createUserdoc(user);
      //console.log(user);
    });  
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
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
