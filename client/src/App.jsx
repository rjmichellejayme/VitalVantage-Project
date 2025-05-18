import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Index from './Index.jsx';
import Login from './Login.jsx';
import SignIn from './SignIn.jsx';
import About_Home from './About_Home.jsx';
import About_Land from './About_Land.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import ClinicApt from './ClinicApt.jsx';
import ManageProfile from './ManageProfile.jsx';
import Header_p from './Header_p.jsx';
import RecordAndHistory from './RecordandHistory.jsx';
import EMed from './EMed.jsx';
import Appointment from './Appointment.jsx';
import OBGYN from './OBGYN.jsx';
import OBGYN_admin from './OBGYN_admin.jsx';
import AdminViewAppointment from './AdminViewAppointment.jsx';
import MENTAL from './MENTAL.jsx';
import CARDIO from './CARDIO.jsx';
import PEDIA from './PEDIA.jsx';
import DENTISTRY from './DENTISTRY.jsx';
import './scss/style.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about_home" element={<About_Home />} />
        <Route path="/about_land" element={<About_Land />} />
        <Route path="/ClinicApt" element={<ClinicApt />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ManageProfile" element={<><Header_p /><ManageProfile /></>} />
        <Route path="/records" element={<><Header_p /><RecordAndHistory /></>} />
        <Route path="/e-med" element={<EMed />} />
        <Route path="/OBGYN" element={<OBGYN />} />
        <Route path="/OBGYN_admin" element={<OBGYN_admin />} />
        <Route path="/admin-view-appointment" element={<AdminViewAppointment />} />
        <Route path="/MENTAL" element={<MENTAL />} />
        <Route path="/CARDIO" element={<CARDIO />} />
        <Route path="/PEDIA" element={<PEDIA />} />
        <Route path="/DENTISTRY" element={<DENTISTRY />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
