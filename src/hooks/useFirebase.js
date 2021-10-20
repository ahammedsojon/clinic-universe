import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GithubAuthProvider, FacebookAuthProvider, sendPasswordResetEmail, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const registerNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const processLogIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider)
    }
    const facebookSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, facebookProvider)
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            console.log(error.message);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const fullName = firstName + ' ' + lastName;
    const userInfo = (fullName, image) => {
        updateProfile(auth.currentUser, {
            displayName: fullName, photoURL: image
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });
    }

    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const handleFirstNameChange = e => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = e => {
        setLastName(e.target.value)
    }
    const handleImageChange = e => {
        setImage(e.target.value);
        console.log(e.target.value)
        console.log(image)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
        console.log(e.target.value)
    }

    return {
        user,
        isLoading,
        setIsLoading,
        googleSignIn,
        githubSignIn,
        facebookSignIn,
        registerNewUser,
        processLogIn,
        logOut,
        handleFirstNameChange,
        handleLastNameChange,
        handleImageChange,
        handleEmailChange,
        handlePasswordChange,
        firstName,
        lastName,
        email,
        password,
        userInfo,
        fullName,
        image,
        verifyEmail,
        resetPassword,
        error,
        setError
    }
}

export default useFirebase;