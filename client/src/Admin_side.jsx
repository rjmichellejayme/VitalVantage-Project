import React from 'react';
import './scss/style.css';

function Admin_side() {
  return (
    <aside className="admin-sidebar">
      <a href="/">
        <img className="logo" alt="Logo" src="/src/assets/logo.png" />
      </a>
      <nav className="sidebar-navigation">
        <h2>Appointments</h2>
        <h3>General Consultation</h3>
        <ul>
          <li>OBGYN</li>
          <li>Mental Health</li>
          <li>Dental</li>
          <li>Cardio</li>
          <li>Pedia</li>
        </ul>
        <h3>Lab Services</h3>
        <h3>Imaging</h3>
      </nav>
    </aside>
  );
}

export default Admin_side;
