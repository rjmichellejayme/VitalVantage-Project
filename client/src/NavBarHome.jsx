import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Scrollchor } from 'react-scrollchor';
import './scss/style.css';
import { Scroll } from 'lucide-react';

function NavBarHome() {
  return (
    <>
      <nav>
        <div className='navBar'>
          <Link to="/Home" className='navItm'>
            <div>HOME</div>
          </Link>

          <Scrollchor to="#clinics-home" className='navItm'>
            <div>CLINICS</div>
          </Scrollchor>

          <Scrollchor to="#laboratories-home" className='navItm'>
            <div>LABORATORIES</div>
          </Scrollchor>

          <Link to="/About_Home" className='navItm'>
            <div>ABOUT</div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBarHome;
