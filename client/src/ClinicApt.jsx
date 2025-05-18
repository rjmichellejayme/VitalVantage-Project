import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Header_p from './Header_p.jsx';

import './scss/style.css';
import NavBarHome from './NavBarHome.jsx';

function ClinicApt() {
  const [currentStep, setCurrentStep] = useState(1); // Tracks the current step

  // Function to handle navigation
  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleCompleteAppointment = () => {
    // Logic to complete the appointment
    console.log('Appointment completed!');
    //  reset steps or update state here or add alert
  };

  return (
    <>
      <Header_p />
      <NavBarHome />
      <div className="apt-wrapper">
        <div className="apt-nav">
          <ul>
            <li className={currentStep === 1 ? 'active-step' : ''}>
              <p className="apt-stepnum">1</p>
              <p className="apt-stepname">Set Appointment</p>
            </li>
            <li className={currentStep === 2 ? 'active-step' : ''}>
              <p className="apt-stepnum">2</p>
              <p className="apt-stepname">Your Information</p>
            </li>
            <li className={currentStep === 3 ? 'active-step' : ''}>
              <p className="apt-stepnum">3</p>
              <p className="apt-stepname">Confirmation</p>
            </li>
          </ul>
        </div>

        {/* Main Content Sections */}
        {currentStep === 1 && (
          <main className='apt-main set'>
            <aside>
              <h2>Selected Services</h2>
              <ol>
                <li>Postnatal</li>
              </ol>
             
            </aside>
            <div className='apt-content'>

            <section className='services-wrap'>
              <h2 className='service-title'>SERVICES OFFERED IN OUR OB-GYN DEPARTMENT</h2>
              <ul className='Clinic Notes'>
                <li>Appointments Needed</li>
                <li>Walk-ins Allowed</li>
              </ul>
              <div className='clinic-service'>
                <div className='services-choose'>
                  <div className='service-book'>
                    <h2>1. Prenatal Checkup</h2>
                    <button className='book-btn'>Book</button>
                  </div>
                  <p>Prenatal checkups monitor your health and baby’s development during pregnancy. Book your appointment for a healthy pregnancy</p>
                </div>
                <div className='apt-notes-wrap'>
                  <p className='notes-instructuction'>Add any details or special requests for your appointment here.</p>
                  <textarea className='apt-notes' id='prenatal-notes'></textarea>
                </div>
              </div>

              <div className='clinic-service'>
                <div className='services-choose'>
                  <div className='service-book'>
                    <h2>2. Postnatal</h2>
                    <button className='book-btn'>Book</button>
                  </div>
                  <p>Prenatal checkups monitor your health and baby’s development during pregnancy. Book your appointment for a healthy pregnancy</p>
                </div>
                <div className='apt-notes-wrap'>
                  <p className='notes-instructuction'>Add any details or special requests for your appointment here.</p>
                  <textarea className='apt-notes' id='prenatal-notes'></textarea>
                </div>
              </div>

              <div className='clinic-service'>
                <div className='services-choose'>
                  <div className='service-book'>
                    <h2>3. Gynecological exam</h2>
                    <button className='book-btn'>Book</button>
                  </div>
                  <p>Prenatal checkups monitor your health and baby’s development during pregnancy. Book your appointment for a healthy pregnancy</p>
                </div>
                <div className='apt-notes-wrap'>
                  <p className='notes-instructuction'>Add any details or special requests for your appointment here.</p>
                  <textarea className='apt-notes' id='prenatal-notes'></textarea>
                </div>
              </div>
            </section>

            <section className='select-date'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
              <div className='select-time'>
                <div className="radio">
                  <label>
                    <input type="radio" name="time" value="7am" /> 7:00 AM - 8:00 AM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">10 slots left</span>
                </div>

                <div className="radio">
                  <label>
                    <input type="radio" name="time" value="8am" /> 8:00 AM - 9:00 AM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">8 slots left</span>
                </div>

                <div className="radio">
                  <label>
                    <input type="radio" name="time" value="9am" /> 9:00 AM - 10:00 AM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">12 slots left</span>
                </div>

                <div className="radio">
                  <label>
                    <input type="radio" name="time" value="10am" /> 10:00 AM - 11:00 AM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">6 slots left</span>
                </div>

                <div className="radio">
                  <label>
                    <input type="radio" name="time" value="11am" /> 11:00 AM - 12:00 PM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">15 slots left</span>
                </div>

                <div className="radio">
                  <label>
                    <input type="radio" name="time" value="12pm" /> 12:00 PM - 1:00 PM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">9 slots left</span>
                </div>

                <div className="radio">
                  <label>
                    <input type="radio" name="time" value="1pm" /> 1:00 PM - 2:00 PM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">7 slots left</span>
                </div>

                <div className="radio">
                  <label>
                    <input type="radio" name="time" value="2pm" /> 2:00 PM - 3:00 PM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">5 slots left</span>
                </div>

                <div className="radio">
                  <label>
                    <input type="radio" name="time" value="3pm" /> 3:00 PM - 4:00 PM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">3 slots left</span>
                </div>

                <div className="radio">
                  <label>
                    <input type="radio" name="time" value="4pm" /> 4:00 PM - 5:00 PM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">0 slots left</span>
                </div>
              </div>
            </section>
            </div>
          </main>
        )}


        {currentStep === 2 && (
          <main className="information-main">
            <section className="patient-info">
              <div className="patient-details">
              <h3>Patient Information</h3>
                <label htmlFor="full-name">Full Name:</label>
                <input type="text" id="full-name" name="full-name" required />

                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required />

                <label htmlFor="phone-number">Phone Number:</label>
                <input type="tel" id="phone-number" name="phone-number" required />

                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" required />
              </div>

              
              <div className="emergency-contact-details">
              <h3>Emergency Contact Information</h3>
                <label htmlFor="emergency-name">Emergency Contact Name:</label>
                <input type="text" id="emergency-name" name="emergency-name" required />

                <label htmlFor="emergency-phone">Emergency Contact Phone:</label>
                <input type="tel" id="emergency-phone" name="emergency-phone" required />

                <label htmlFor="emergency-email">Emergency Contact Email:</label>
                <input type="email" id="emergency-email" name="emergency-email" required />
              </div>
            </section>

          </main>
        )}


        {currentStep === 3 && (
          <main className="confirmation-main">
            <section className="confirmation-section">
          <h2>Appointment Confirmation</h2>
          
          <div className="appointment-details">
            <h3>Appointment Details</h3>
            <p><strong>Doctor's Name:</strong> Dr. Jane Doe</p>
            <p><strong>Appointment Date:</strong> January 25, 2025</p>
            <p><strong>Appointment Time:</strong> 10:00 AM</p>
            <p><strong>Services Booked:</strong> General Check-up, Blood Test</p>
          </div>
          
          <div className="patient-info-summary">
            <h3>Patient Information</h3>
            <p><strong>Full Name:</strong> John Doe</p>
            <p><strong>Date of Birth:</strong> 01/01/1980</p>
            <p><strong>Phone Number:</strong> +1 234 567 890</p>
            <p><strong>Email Address:</strong> johndoe@example.com</p>
          </div>

          <div className="emergency-contact-info">
            <h3>Emergency Contact Information</h3>
            <p><strong>Emergency Contact Name:</strong> Jane Doe</p>
            <p><strong>Emergency Contact Phone:</strong> +1 234 567 891</p>
            <p><strong>Emergency Contact Email:</strong> janedoe@example.com</p>
          </div>

          <div className="reminders">
            <h3>Reminders</h3>
            <ul>
              <li>If you cannot make it to your appointment, please reschedule at least 24 hours in advance.</li>
              <li>If you are a "no-show," you will need to set a new appointment and may incur a late cancellation fee.</li>
              <li>Please arrive 10-15 minutes before your scheduled appointment time.</li>
              <li>If you have any questions or need to cancel, please call our office at least 24 hours in advance.</li>
              <li>Remember to bring your ID, insurance card, and any required documents to your appointment.</li>
            </ul>
          </div>

          <button className="complete-appointment-btn" onClick={handleCompleteAppointment}>
            Complete Appointment
          </button>
        </section>


          </main>
        )}

        {/* Navigation Buttons */}
        <div className="nav-btns">
          <button
            className="nav-btn"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </button>
          <button
            className="nav-btn"
            onClick={handleNext}
            disabled={currentStep === 3}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default ClinicApt;
