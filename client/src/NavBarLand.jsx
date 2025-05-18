import { useState } from 'react'
import './scss/style.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function NavBarLand(){
    return(
        <nav>

        <div className='navBar'>
            <Link to="/" className='navItm'><div>HOME</div></Link>
            <HashLink smooth to="/#clinics" className='navItm'><div>CLINICS</div></HashLink>
            <HashLink smooth to="/#laboratories" className='navItm'><div>LABORATORIES</div></HashLink>
            <Link to="/About_Land" className='navItm'><div>ABOUT</div></Link>
        </div>
      </nav>
    )
}

export default NavBarLand;