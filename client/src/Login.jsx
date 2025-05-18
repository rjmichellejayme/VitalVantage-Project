import React, { useState } from 'react';
import './scss/style.scss'; // Ensure styles are properly imported
import SignIn from './SignIn'; // Import SignIn component
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './assets/logo.png';
import Header_Login from './Header_Login';
import NavBar from './NavBarHome'; 
import useLogin from './hooks/useLogin';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loginError, handleClientLogin, handleAdminLogin } = useLogin();
    const navigate = useNavigate();

    const toggleAuth = () => {
        setIsSignUp(!isSignUp);
    };

    // Handle Google Login
    const handleGoogleLogin = async () => {
        const auth = getAuth(firebaseApp);
        const provider = new GoogleAuthProvider();
        
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Google login successful:', user);
            navigate('/dashboard'); // Redirect to the dashboard after successful login
        } catch (error) {
            console.error('Error during Google login:', error.message);
            alert('Google login failed, please try again');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "hospital@vitalvantage.com") {
           await handleAdminLogin(email, password, navigate); // Check admin login
        } else {
           await handleClientLogin(email, password, navigate); // Check client login
        }
    };

    return (
        <div className="login-page">
            <Header_Login />
            <NavBar />
            <div className="body">
                <div className={`auth-page-container ${isSignUp ? 'active' : ''}`}>
                    {isSignUp ? (
                        <SignIn toggle={toggleAuth} />
                    ) : (
                        <div className="form-container sign-in">
                            <form onSubmit={handleSubmit}>
                                <h1>Log In</h1>
                                <div className="social-icons">
                                <a href="#" className="icon" onClick={handleGoogleLogin}>
                                    <i className="fa-brands fa-google-plus-g"></i>
                                </a>
                                </div>
                                <span>or use your email account</span>
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                                <a href="#">Forgot Your Password?</a>
                                <button type="submit">Log In</button>
                            </form>
                            {loginError && <p className="error-message">{loginError}</p>}
                        </div>
                    )}
                    {!isSignUp && (
                        <div class="toggle-container">
                            <div class="toggle">
                                <div className="toggle-panel">
                                    <div className="toggle-left">
                                        <h1>Hello, Friend!</h1>
                                        <p>Register with your personal details to use all site features</p>
                                        <button onClick={toggleAuth}>Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;