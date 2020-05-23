import React from 'react';
import './signup.scss';

import Forminput from '../forminputs/forminputs';
import Button from '../button/button';
import {auth, createUserdoc} from '../../firebase/firebase';


class SignUp extends React.Component{
    constructor(){
        super();

        this.state ={
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
        }
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmpassword} = this.state;
        if(password!==confirmpassword){
            alert("password and confirmpassword don't match");
            return;
        }

        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            await createUserdoc(user,{displayName});

            this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
            });

        }
        catch(error){
            console.error(error);
        }
    };
    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    };
    render(){
        const {displayName,email,password,confirmpassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'> I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-ip-form' onSubmit={this.handleSubmit}>
                    <Forminput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='display Name'
                        required
                    />
                    <Forminput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    />
                    <Forminput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />
                    <Forminput
                        type='password'
                        name='confirmpassword'
                        value={confirmpassword}
                        onChange={this.handleChange}
                        label='confirmpassword'
                        required
                    />
                    <Button type='submit'>Sign Up</Button>
                </form>

            </div>
        );
    }
}
export default SignUp;