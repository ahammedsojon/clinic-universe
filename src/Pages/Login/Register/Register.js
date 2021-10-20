import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { handleFirstNameChange, handleLastNameChange, handleImageChange, handleEmailChange, handlePasswordChange, registerNewUser, firstName, lastName, email, password, userInfo, fullName, image, verifyEmail, } = useAuth();

    const handleRegistration = e => {
        e.preventDefault();
        registerNewUser(email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                verifyEmail()
                userInfo(fullName, image);
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            }).finally(() => {
                window.location.assign('/');
            })
        console.log('submit')
    }
    return (
        <>
            <div className="grid min-h-screen place-items-center">
                <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                    <h1 className="text-xl font-semibold">Hello there 👋, <span className="font-normal">please fill in your information to continue</span></h1>
                    <form onSubmit={handleRegistration} className="mt-6">
                        <div className="flex justify-between gap-3">
                            <span className="w-1/2">
                                <label htmlFor="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                                <input onBlur={handleFirstNameChange} id="firstname" type="text" name="firstname" placeholder="First" autoComplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            </span>
                            <span className="w-1/2">
                                <label htmlFor="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                                <input onBlur={handleLastNameChange} id="lastname" type="text" name="lastname" placeholder="Last" autoComplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            </span>
                        </div>
                        <label htmlFor="image" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Image URL</label>
                        <input onBlur={handleImageChange} id="image" type="text" name="image" placeholder="Image URL Inclusdes https://" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
                        <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input onBlur={handleEmailChange} id="email" type="email" name="email" placeholder="Email" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input onBlur={handlePasswordChange} id="password" type="password" name="password" placeholder="********" autoComplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <label htmlFor="password-confirm" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
                        <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autoComplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Sign up
                        </button>
                        <p className="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
                            <Link to="/login">Already registered?</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;