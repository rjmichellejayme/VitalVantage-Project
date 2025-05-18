import { Link } from 'react-router-dom';
import './scss/style.scss';


function Header() {
  return (
    <>
      <header className='header-g'>
        <a href="/"><img className='logo' alt="Logo" src='/src/assets/logo.png'/></a>
        <div className='entry-btn'>
          <button className='login-btn'>
            <Link to="/login"  className='link-btn'>GET STARTED</Link>
          </button>
        </div>
      </header>
    
    </>
  );
}

export default Header;
