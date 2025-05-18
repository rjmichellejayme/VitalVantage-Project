import { Link } from 'react-router-dom';
import './scss/style.scss';
import Header from './Header';
import NavBar from './NavBarLand';

function Header_Login() {
  return (
    <>
    {/* <Header /> */}
      <header className='header-g'>
      <a href="/"><img className='logo' alt="Logo" src='/src/assets/logo.png'/></a>
      </header>

    </>
  );
}

export default Header_Login;
