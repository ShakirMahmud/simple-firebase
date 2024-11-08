import { GithubAuthProvider, GoogleAuthProvider, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        console.log(auth, googleProvider)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result);
                setUser(result.user);
            }).catch(err => {
                console.log('ERROR', err);
                setUser(null);
            })
    };
    const handleSignOut= ()=>{
        signOut(auth)
        .then(()=>{
            console.log('Signing out');
            setUser(null);
        }).catch(err => console.log('ERROR', err))
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            setUser(result.user);
        }).catch(err =>{
            console.log('ERROR', err);
            setUser(null);
        })
    }

    return (
        <div>
            <h2>Login</h2>
            {/* <button onClick={handleGoogleSignIn} className='p-4 mt-4 border-2 rounded-2xl'>Sign in with Google</button>
            <button onClick={handleSignOut} className='p-4 mt-4 border-2 rounded-2xl'>Sign Out</button> */}

            {
                user ? 
                <button onClick={handleSignOut} className='p-4 mt-4 border-2 rounded-2xl'>Sign Out</button>
                :
                <>
                <button onClick={handleGoogleSignIn} className='p-4 mt-4 border-2 rounded-2xl'>Sign in with Google</button>
                <button onClick={handleGithubSignIn} className='p-4 mt-4 border-2 rounded-2xl'>Sign in with GitHub</button>
                </>
            }

            {
                user && <div className='flex flex-col items-center space-y-4 mt-6'>
                    <h4>Logged in as {user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img className='rounded-full' src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;