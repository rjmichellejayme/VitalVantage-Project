import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './scss/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown, faCog, faQuestionCircle, faSignOutAlt, faEdit, faFileText, faFile } from '@fortawesome/free-solid-svg-icons';
import useFetchUserName from './hooks/useFetchUserName';

function Header_p() {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate(); 
  const firstName = useFetchUserName();

  const toggleDropdown = () => {
    setDropdownVisible(prevState => !prevState);
  };

  // Handle logout and redirect to Index page
  const handleLogout = () => {
    // Add any logout logic here (clear tokens, session, etc.)
    navigate('/'); // This will navigate to main.jsx
    setDropdownVisible(false);
  };

  const handleManageProfile = () => {
    navigate('/ManageProfile');
  };  

  return (
    <>
      <header className='header_p'>
        <a href="/"><img className='logo' alt="Logo" src='/src/assets/logo.png'/></a>
        <div className='profile-widget'>
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <span className="username">{firstName}</span>
          <FontAwesomeIcon 
            icon={faCaretDown} 
            className="dropdown-arrow"
            onClick={toggleDropdown}
          />

          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/ManageProfile" className="dropdown-link" onClick={() => setDropdownVisible(false)}>
                  <FontAwesomeIcon icon={faEdit} />
                  <span>Manage Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/records" className="dropdown-link" onClick={() => setDropdownVisible(false)}>
                  <FontAwesomeIcon icon={faFileText} />
                  <span>Records and History</span>
                </Link>
              </li>
              <li>
                <Link to="/e-med" className="dropdown-link" onClick={() => setDropdownVisible(false)}>
                  <FontAwesomeIcon icon={faFile} />
                  <span>E-Medical Certificate</span>
                </Link>
              </li>
              <li>
                <button 
                  className="dropdown-link"
                  onClick={handleLogout}
                  type="button"
                  style={{ padding: '12px 16px' }}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span>Log Out</span>
                </button>
              </li>
            </ul>
          )}
        </div>
      </header>
    </>
  );
}

export default Header_p;
