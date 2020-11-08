import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './features/firebase'
import './Login.css'

const Login = () => {
    const SignIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png" alt="" />
            </div>
            <h2>IMessage</h2>

            <Button onClick={SignIn}>Login With Google</Button>
        </div>
    )
}

export default Login
