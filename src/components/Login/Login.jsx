import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import React from 'react';

const Login = () => {

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        
        console.log('Google Sign-In successful');
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleSignIn} className='p-4 mt-4 border-2 rounded-2xl'>Sign in with Google</button>
        </div>
    );
};

export default Login;