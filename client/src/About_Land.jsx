import { useState } from 'react'
import './scss/style.css'
import Header_p from './Header_p'
import NavBar from './NavBarLand'

function About_Home() {
  return (
    <>
      <Header_p />
      <NavBar />
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h1>About Us</h1>
            <p className="subtitle">
              Safe, comprehensive and total patient care
            </p>
            <div className="about-description">
              <p>
                The world's finest healthcare belongs right here at
                Vital Vintage. Traditional and modern technology is a
                cornerstone. Appointment and checkup made easy
                and secure. We're here to believe that with the potential
                healthcare development, the bright outlook and
                continuous improvement will be shared with the
                medical community they want to help.
              </p>
            </div>
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">20,123</span>
              <span className="stat-label">Number of Patients</span>
            </div>

            <div className="stat-item">
              <span className="stat-number">1,400</span>
              <span className="stat-label">Established Year</span>
            </div>

            <div className="stat-item">
              <span className="stat-number">13,540</span>
              <span className="stat-label">Number of Staff</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About_Home
