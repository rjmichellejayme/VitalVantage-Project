import React from 'react';
import useAuth from './hooks/useAuth'; 
import './scss/style.css';

function SignIn({ toggle }) {
    const {
        fname, setFname,
        mname, setMname,
        lname, setLname,
        email, setEmail,
        password, setPassword,
        loginError, setLoginError,
        handleSignUpSubmit,  
        handleGoogleSignUpClick
    } = useAuth(); 

    return (
        <div className="signin-page">
            <div className="body-signin">
                <div className="auth-page-container-signin">
                    <div className="form-container-sign-in">
                        <form onSubmit={handleSignUpSubmit}>
                            <h1>Create Account</h1>

                            <div className="social-icons-signin">
                                <a href="#" className="icon" onClick={handleGoogleSignUpClick}>
                                    <i className="fa-brands fa-google-plus-g"></i>
                                </a>
                            </div>
                            <span>Or use your email account</span>

                            <input
                                type="text"
                                placeholder="First Name"
                                value={fname}
                                onChange={(e) => setFname(e.target.value)} 
                            />
                            <input
                                type="text"
                                placeholder="Middle Name (optional)"
                                value={mname}
                                onChange={(e) => setMname(e.target.value)} 
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lname}
                                onChange={(e) => setLname(e.target.value)} 
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <button type="submit">Sign Up</button>
                        </form>

                        <div className="toggle-container-signin">
                            <div className="toggle-signin">
                                <div className="toggle-panel-signin">
                                    <div className="toggle-right">
                                        <h1>Welcome Back!</h1>
                                        <p>Enter your personal details to use all site features</p>
                                        <button onClick={toggle}>Log In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;