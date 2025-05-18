import React from 'react';
import './scss/_emed.scss';
import NavBarHome from './NavBarHome';
import Header_p from './Header_p';
import { useNavigate } from "react-router-dom";
import { Button } from './components/ui/button';
import { Settings, FileText, FileCheck } from 'lucide-react';
import useFetchUserName from './hooks/useFetchUserName';

const EMed = () => {
  const navigate = useNavigate();
  const firstName = useFetchUserName();
  
  // Add state to track if we're viewing a certificate
  const [isViewingCertificate] = React.useState(() => {
    return window.location.search.includes('view=true');
  });

  const handleBookAppointment = () => {
    navigate('/home');
  };

  return (
    <>
      <Header_p />
      <NavBarHome />
      <div className="user-profile-header">
          <div className="profile-wrapper">
            <div className="profile-info">
              <div className="profile-avatar">
                <img src="/path-to-default-avatar.png" alt="Profile" />
              </div>
              <div className="profile-text">
                <h1>{firstName}</h1>
                <p>Your personal account</p>
              </div>
            </div>
          </div>
        </div>
      <div className="e-med-container">
        <div className="content-wrapper">
        <aside>
              <nav>
                <Button 
                  variant="ghost" 
                  className="nav-item"
                  onClick={() => navigate('/ManageProfile')}
                >
                  <Settings className="icon" size={20} />
                  Manage Profile
                </Button>
                <Button 
                  variant="ghost"
                  className="nav-item"
                  onClick={() => navigate('/records')}
                >
                  <FileText className="icon" size={20} />
                  Records and History
                </Button>
                <Button 
                  variant="ghost"
                  className="nav-item active"
                  onClick={() => navigate('/e-med')}
                >
                  <FileCheck className="icon" size={20} />
                  E-Medical Certificate
                </Button>
              </nav>
            </aside>
          <main>
            <div className="form-section">
              <div className="e-med-container">
                <div className="section-header">
                </div>
                <div className="e-med-section">
                  <h2>E-Medical Certificate</h2>
                  
                  {isViewingCertificate ? (
                    <div className="certificate-preview">
                      <img 
                        src="/path-to-certificate-placeholder.png" 
                        alt="E-Medical Certificate" 
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          border: '1px solid #ccc',
                          borderRadius: '8px',
                          marginTop: '20px'
                        }}
                      />
                    </div>
                  ) : (
                    <div className="card">
                      <p className="card-title">You don't have any e-medical certificates yet.</p>
                      <p className="card-subtitle">Book an appointment now to get e-med certificate</p>
                      <button 
                        className="btn-book"
                        onClick={handleBookAppointment}
                      >
                        Book an Appointment
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default EMed;

