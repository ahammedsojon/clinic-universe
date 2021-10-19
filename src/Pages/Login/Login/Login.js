import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const { googleSignIn, githubSignIn, setIsLoading, processLogIn, email, password, handleEmailChange, handlePasswordChange, facebookSignIn, resetPassword, error, setError } = useAuth();

    const redirect_uri = location.state?.from || ('/')

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                setError(error);
                console.log(error.message);
            }).finally(() => {
                setIsLoading(false);
                history.push(redirect_uri);
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                console.log(error.message);
            }).finally(() => {
                setIsLoading(false);
                history.push(redirect_uri);
            })
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                console.log(error.message);
            }).finally(() => {
                setIsLoading(false);
                history.push(redirect_uri);
            })
    }

    const handleLogIn = e => {
        e.preventDefault();
        processLogIn(email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                history.push(redirect_uri);
                console.log(user)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
                console.log(error.message)
            }).finally(() => {
                setIsLoading(false);
            })
        console.log('log in')
    }
    return (
        <div className="py-6">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')` }}></div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <h1 className="px-4 py-3 text-center text-gray-600 font-bold">Sign in with</h1>
                    <div className="flex items-center justify-between mt-4 mb-8 px-8 w-4/5 mx-auto">
                        <img onClick={handleGoogleSignIn} className="h-10 w-10 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/2875/2875404.png" alt="" />
                        <img onClick={handleGithubSignIn} className="h-10 w-10 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/889/889111.png" alt="" />
                        <img onClick={handleFacebookSignIn} className="h-10 w-10 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="" />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <span className="text-xs text-center text-gray-500 uppercase">or login with email</span>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <form onSubmit={handleLogIn}>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">Email Address</label>
                            <input onBlur={handleEmailChange} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" required />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <a onClick={resetPassword} target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/#inbox" className="text-xs text-gray-500">Forget Password?</a>
                            </div>
                            <input onBlur={handlePasswordChange} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" required />
                            {
                                error === 'Firebase: Error (auth/invalid-email).' &&
                                <p className="text-red-800">Email doesn't match</p>
                            }
                            {
                                error === 'Firebase: Error (auth/wrong-password).' && <p className="text-red-800">Passoword was incorrect</p>
                            }
                            {
                                error === 'Firebase: Error (auth/user-not-found).' && <p className="text-red-800">Invalid user</p>
                            }
                        </div>
                        <div className="mt-8">
                            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link to="/register" className="text-xs text-gray-500 uppercase">Or Sign up</Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;