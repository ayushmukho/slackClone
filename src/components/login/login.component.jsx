import React from 'react'

import { Button } from '@material-ui/core';

import './login.styles.css'
import { auth, provider } from '../../firebase/firebase';
import { useStateValue } from '../../StateProvider';
import {actionTypes} from '../../reducer';

function Login() {
    const [state, disaptch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
                
                disaptch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => {
                alert(error.message);
            })
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://pbs.twimg.com/profile_images/1085629672891674624/7uSLcxX6.jpg" alt=""/>

                <h1>Sign in to Slack Clone</h1>
                <p>sach.slack.com</p>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>


            </div>
        </div>
    )
}

export default Login
