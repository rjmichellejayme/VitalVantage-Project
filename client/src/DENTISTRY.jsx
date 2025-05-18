import { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs'; // Import dayjs
import Header_p from './Header_p.jsx';
import './scss/style.css';
import NavBarHome from './NavBarHome.jsx';
import useAppointment from './hooks/useAppointment.js';
import { useNavigate } from 'react-router-dom';

function DENTISTRY() {
  const [currentStep, setCurrentStep] = useState(1); // Tracks the current step
  const [showPopup, setShowPopup] = useState(false); // State to control the pop-up visibility
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleCompleteAppointment = () => {
    setShowPopup(true); // Show the pop-up
    handleAppointment();
  };

  const handleRedirectToProfile = () => {
    navigate('/records');
  };

  const handleBook = (service) => {
    if (selectedServices.includes(service)) {
      // Remove service if already booked
      setSelectedServices(selectedServices.filter((item) => item !== service));
      console.log(`${service} has been canceled!`);
    } else {
      // Add service if not already booked
      setSelectedServices([...selectedServices, service]);
      console.log(`${service} has been booked!`);
    }
  };

  // Function to handle date selection
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    console.log("Selected Date:", newDate ? newDate.format("YYYY-MM-DD") : "None");
  };

  const disablePastDates = (date) => {
    return date.isBefore(dayjs(), 'day'); // Disable all dates before today
  };

  const clinicName = "Dentistry";

  const {
    name,
    dob,
    contactNumber,
    email,
    emergencyContact,
    emergencyContactNumber,
    emergencyContactEmail,
    handleInputChange,
    handleAppointment,
    handleEMedCheckboxChange,
    wantsEMed,
    setSelectedTime,
    setSelectedDate,
    setSelectedServices,
    selectedServices,
    selectedTime,
    selectedDate,
    handleFirstNotesChange,
    handleSecondNotesChange,
    handleThirdNotesChange,
    firstNotes,
    secondNotes,
    thirdNotes,
    setClinic,
  } = useAppointment('userID');

  useEffect(() => {
    setClinic(clinicName);
  }, [clinicName, setClinic]);

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
          <main className="apt-main set" id="appointment-main">
            <aside id="selected-services">
              <h2 className="selected-services-title">Selected Services</h2>
              <ol className="selected-services-list">
                {selectedServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ol>
            </aside>
            <div className="apt-content" id="appointment-content">

              <section className="services-wrap" id="services-offered">
                <h2 className="service-title" id="services-title">SERVICES OFFERED IN OUR DENTAL DEPARTMENT</h2>
                <ul className="clinic-notes" id="clinic-notes">
                  <li className="note-item" id="appointments-needed">Appointments Needed</li>
                  <li className="note-item" id="walkins-allowed">Walk-ins Allowed</li>
                </ul>

                <div className="clinic-service" id="service-checkup">
                  <div className="services-choose">
                    <div className="service-book">
                      <h2>1. Dental Check-up and Cleaning</h2>
                      <button 
                        className="book-btn" 
                        id="book-checkup"
                        onClick={() => handleBook('Dental Check-up and Cleaning')}
                      >
                        {selectedServices.includes('Dental Check-up and Cleaning') ? 'Cancel Booking' : 'Book'}
                      </button>
                    </div>
                    <p>Comprehensive oral examination, professional cleaning, and dental health assessment to maintain optimal oral hygiene and detect potential issues early.</p>
                  </div>
                  <div className="apt-notes-wrap">
                    <p className="notes-instruction">Add any details or special requests for your appointment here.</p>
                    <textarea 
                      className="apt-notes" 
                      name="checkup-notes"
                      id="checkup-notes"
                      value={firstNotes}
                      onChange={handleFirstNotesChange}
                    />
                  </div>
                </div>

                <div className="clinic-service" id="service-treatment">
                  <div className="services-choose">
                    <div className="service-book">
                      <h2>2. Dental Treatment</h2>
                      <button 
                        className="book-btn" 
                        id="book-treatment"
                        onClick={() => handleBook('Dental Treatment')}
                      >
                        {selectedServices.includes('Dental Treatment') ? 'Cancel Booking' : 'Book'}
                      </button>
                    </div>
                    <p>Professional dental treatments including fillings, extractions, root canals, and other dental procedures to address various oral health concerns.</p>
                  </div>
                  <div className="apt-notes-wrap">
                    <p className="notes-instruction">Add any details or special requests for your appointment here.</p>
                    <textarea 
                      className="apt-notes" 
                      name="treatment-notes"
                      id="treatment-notes"
                      value={secondNotes}
                      onChange={handleSecondNotesChange}
                    />
                  </div>
                </div>

                <div className="clinic-service" id="service-cosmetic">
                  <div className="services-choose">
                    <div className="service-book">
                      <h2>3. Cosmetic Dentistry</h2>
                      <button 
                        className="book-btn" 
                        id="book-cosmetic"
                        onClick={() => handleBook('Cosmetic Dentistry')}
                      >
                        {selectedServices.includes('Cosmetic Dentistry') ? 'Cancel Booking' : 'Book'}
                      </button>
                    </div>
                    <p>Enhance your smile with professional cosmetic dental procedures including teeth whitening, veneers, dental bonding, and other aesthetic treatments.</p>
                  </div>
                  <div className="apt-notes-wrap">
                    <p className="notes-instruction">Add any details or special requests for your appointment here.</p>
                    <textarea 
                      className="apt-notes"
                      name="cosmetic-notes"
                      id="cosmetic-notes"
                      value={thirdNotes}
                      onChange={handleThirdNotesChange}
                    />
                  </div>
                </div>
              </section>


          <section className='select-date'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            onChange={handleDateChange}
            shouldDisableDate={disablePastDates}
          />
        </LocalizationProvider>
              <div className='select-time'>
                <div className="radio">
                  <label>
                    <input 
                      type="radio" 
                      name="time" 
                      value="7:00 AM - 8:00 AM" 
                      onChange={(e) => setSelectedTime(e.target.value)} 
                    /> 7:00 AM - 8:00 AM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">10 slots left</span>
                </div>

                <div className="radio">
                  <label>
                  <input 
                    type="radio" 
                    name="time" 
                    value="8:00 AM - 9:00 AM" 
                    onChange={(e) => setSelectedTime(e.target.value)} 
                  /> 8:00 AM - 9:00 AM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">8 slots left</span>
                </div>

                <div className="radio">
                  <label>
                  <input 
                      type="radio" 
                      name="time" 
                      value="9:00 AM - 10:00 AM" 
                      onChange={(e) => setSelectedTime(e.target.value)} 
                    /> 9:00 AM - 10:00 AM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">12 slots left</span>
                </div>

                <div className="radio">
                  <label>
                  <input 
                      type="radio" 
                      name="time" 
                      value="10:00 AM - 11:00 AM" 
                      onChange={(e) => setSelectedTime(e.target.value)} 
                    /> 10:00 AM - 11:00 AM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">6 slots left</span>
                </div>

                <div className="radio">
                  <label>
                  <input 
                      type="radio" 
                      name="time" 
                      value="11:00 AM - 12:00 PM" 
                      onChange={(e) => setSelectedTime(e.target.value)} 
                    /> 11:00 AM - 12:00 PM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">15 slots left</span>
                </div>

                <div className="radio">
                  <label>
                  <input 
                      type="radio" 
                      name="time" 
                      value="12:00 PM - 1:00 PM" 
                      onChange={(e) => setSelectedTime(e.target.value)} 
                    /> 12:00 PM - 1:00 PM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">9 slots left</span>
                </div>

                <div className="radio">
                  <label>
                  <input 
                      type="radio" 
                      name="time" 
                      value="1:00 PM - 2:00 PM" 
                      onChange={(e) => setSelectedTime(e.target.value)} 
                    /> 1:00 PM - 2:00 PM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">7 slots left</span>
                </div>

                <div className="radio">
                  <label>
                  <input 
                      type="radio" 
                      name="time" 
                      value="2:00 PM - 3:00 PM" 
                      onChange={(e) => setSelectedTime(e.target.value)} 
                    /> 2:00 PM - 3:00 PM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">5 slots left</span>
                </div>

                <div className="radio">
                  <label>
                  <input 
                      type="radio" 
                      name="time" 
                      value="3:00 PM - 4:00 PM" 
                      onChange={(e) => setSelectedTime(e.target.value)} 
                    /> 3:00 PM - 4:00 PM
                  </label>
                  <span className="availability-label">Available Slots:</span>
                  <span className="slots-left">3 slots left</span>
                </div>

                <div className="radio">
                  <label>
                  <input 
                      type="radio" 
                      name="time" 
                      value="4:00 PM - 5:00 PM" 
                      onChange={(e) => setSelectedTime(e.target.value)} 
                    /> 4:00 PM - 5:00 PM
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
              <input
                type="text"
                id="full-name"
                name="full-name"
                value={name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={dob}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="phone-number">Phone Number:</label>
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                value={contactNumber}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="emergency-contact-details">
              <h3>Emergency Contact Information</h3>
              <label htmlFor="emergency-name">Emergency Contact Name:</label>
              <input
                type="text"
                id="emergency-name"
                name="emergency-name"
                value={emergencyContact}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="emergency-phone">Emergency Contact Phone:</label>
              <input
                type="tel"
                id="emergency-phone"
                name="emergency-phone"
                value={emergencyContactNumber}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="emergency-email">Emergency Contact Email:</label>
              <input
                type="email"
                id="emergency-email"
                name="emergency-email"
                value={emergencyContactEmail}
                onChange={handleInputChange}
                required
              />

              <div className="medical-certificate">
                  <label htmlFor="medical-certificate">
                    <input
                      type="checkbox"
                      id="medical-certificate" 
                      name="medical-certificate"
                      checked={wantsEMed}
                      onChange={handleEMedCheckboxChange}
                    />
                    Do you need a medical certificate?
                  </label>
              </div>
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
              <p><strong>Appointment Date:</strong> {selectedDate ? selectedDate.format("YYYY-MM-DD") : "No date selected."}</p>
              <p><strong>Appointment Time:</strong> {selectedTime ? selectedTime : "No time selected."} </p>
              <p><strong>Services Booked:</strong> <ul>
                  {selectedServices.length > 0 ? (
                    selectedServices.map((service, index) => <li key={index}>{service}</li>)
                  ) : (
                    <p>No services selected.</p>
                  )}
                </ul> 
              </p>
            </div>

            <div className="patient-info-summary">
              <h3>Patient Information</h3>
              <p><strong>Full Name:</strong> {name || "Not provided"}</p>
              <p><strong>Date of Birth:</strong> {dob || "Not provided"}</p>
              <p><strong>Phone Number:</strong> {contactNumber || "Not provided"}</p>
              <p><strong>Email Address:</strong> {email || "Not provided"}</p>
            </div>

            <div className="emergency-contact-info">
              <h3>Emergency Contact Information</h3>
              <p><strong>Contact Name:</strong> {emergencyContact || "Not provided"}</p>
              <p><strong>Phone Number:</strong> {emergencyContactNumber || "Not provided"}</p>
              <p><strong>Email Address:</strong> {emergencyContactEmail || "Not provided"}</p>
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

            <button
              className="complete-appointment-btn"
              onClick={handleCompleteAppointment}
            >
              Complete Appointment
            </button>
          </section>
        </main>
      )}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Appointment Completed!</h3>
            <p>Check your appointment status on your profile.</p>
            <button onClick={handleRedirectToProfile}>Go to Profile</button>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
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



export default DENTISTRY;
