import { useState } from 'react';
import { handleSignUp, handleGoogleSignUp } from '../fb/auth';

const useAuth = () => {
    const [fname, setFname] = useState('');
    const [mname, setMname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();

        if (!fname || !lname || !email || !password) {
            const errorMessage = "First name, last name, email and password are required.";
            setLoginError(errorMessage);
            return;
        }

        await handleSignUp(fname, mname, lname, email, password, (error) => {
            setLoginError(error);
        });

        setFname('');
        setMname('');
        setLname('');
        setEmail('');
        setPassword('');
    };

    const handleGoogleSignUpClick = async () => {
        await handleGoogleSignUp((error) => {
            setLoginError(error);
        });
    };

    return {
        fname,
        setFname,
        mname,
        setMname,
        lname,
        setLname,
        email,
        setEmail,
        password,
        setPassword,
        loginError,
        setLoginError,
        handleSignUpSubmit,
        handleGoogleSignUpClick,
    };
};

export default useAuth;
