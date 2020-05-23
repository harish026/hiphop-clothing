import React from 'react';
import './sign-in.scss';
import Forminput from '../forminputs/forminputs';
import Button from '../button/button';
import {auth,signInWithGoogle} from '../../firebase/firebase';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handlesubmit=async event=>{
        event.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }
        catch(error){
            console.error(error);
        }
        
    }
    handlechange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})

    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handlesubmit}>
                    <Forminput 
                        name='email' 
                        type='email' 
                        handlechange={this.handlechange} 
                        value={this.state.email}
                        label='email'
                        required/>           
                    
                    <Forminput
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handlechange={this.handlechange}
                        label='password'
                        required/>
                    
                    <br/>
                    <div className='buttons'>
                        <Button type='submit' value='submit'>Sign in</Button>
                        <br/>
                        <center><p>or <br/><br/></p></center>
                        <br/>
                        <br/>
                        <Button  type='button' onClick={signInWithGoogle} >signinwithgoogle</Button>
                    </div>
                    
                 </form>
            </div>
        )
    }
}
export default SignIn;