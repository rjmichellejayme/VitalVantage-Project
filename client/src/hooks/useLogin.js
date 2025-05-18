import { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../fb/index';
import { doc, getDoc } from 'firebase/firestore';

const googleProvider = new GoogleAuthProvider();

const useLogin = () => {
    const [loginError, setLoginError] = useState('');

    const handleGoogleLogin = async (navigate) => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                alert("Google Login successful!");
                navigate('/Home');
            } else {
                alert("You are not registered. Please sign up first.");
            }
        } catch (error) {
            setLoginError(error.message);
            alert(`Google Login Error: ${error.message}`);
        }
    };

    const handleClientLogin = async (email, password, navigate) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/Home'); // Redirect to client landing page
        } catch (error) {
            setLoginError(error.message);
            alert(`Login Error: ${error.message}`);
        }
    };

    const handleAdminLogin = async (email, password, navigate) => {
        if (email === "hospital@vitalvantage.com" && password === "123456789") {
            navigate('/OBGYN_admin'); // Redirect to admin page
        } else {
            setLoginError("Invalid admin credentials.");
            alert("Invalid admin credentials.");
        }
    };

    return {
        loginError,
        handleGoogleLogin,
        handleClientLogin,
        handleAdminLogin,
    };
};

export default useLogin;
