import { useState, useEffect } from 'react';
import './scss/style.css';
import Admin_side from './Admin_side.jsx';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs'; // Import dayjs
import { useNavigate, useLocation } from 'react-router-dom'; // Add this import
import { FileText } from 'lucide-react';

function OBGYN_admin() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("Overview"); // Tracks the active section
  const [selectedDate, setSelectedDate] = useState(null); // Tracks the selected date
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate(); // Add this hook
  const location = useLocation(); // Add this hook
  const [status, setStatus] = useState('Scheduled'); // Default status

  const handleSelection = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleNavClick = (section) => {
    setActiveSection(section); // Update the active section
  };

  // Function to handle date selection
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    console.log("Selected Date:", newDate ? newDate.format("YYYY-MM-DD") : "None");
  };

  const disablePastDates = (date) => {
    return date.isBefore(dayjs(), 'day'); // Disable all dates before today
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

   // Sample patient data (replace this with data from your backend/Firebase)
   const [patients, setPatients] = useState([
    { id: 1, name: "Juanita Pepito", status: "Scheduled" },
    { id: 2, name: "Carlos Mercado", status: "Completed" },
    { id: 3, name: "Mia Lopez", status: "Scheduled" },
    { id: 4, name: "John Doe", status: "Cancelled" }
  ]);

  // Add this function to handle viewing appointments
  const handleViewAppointment = (patientId) => {
    navigate('/admin-view-appointment', { state: { patientId } });
  };

  // Update useEffect to handle status changes from AdminViewAppointment
  useEffect(() => {
    // Add console.log to debug
    console.log("Location state:", location.state);
    console.log("Current patients:", patients);

    if (location.state?.updatedAppointment) {
      const updatedPatients = patients.map(patient => {
        // Add console.log to debug the comparison
        console.log("Comparing:", {
          patientName: patient.name,
          updateName: location.state.patientName,
          matches: patient.name === location.state.patientName
        });

        if (patient.name === location.state.patientName) {
          return { ...patient, status: location.state.appointmentStatus };
        }
        return patient;
      });
      
      // Add console.log to see the result
      console.log("Updated patients:", updatedPatients);
      setPatients(updatedPatients);
    }
  }, [location.state]); // Change dependency to location.state

  return (
    <main className="admin-overview">
      <Admin_side />
      <section className="overview-main">
         {/* Main Content */}
         <div className="overview-header">
          <img src="src/assets/obgyn.png" alt="Mental Health Services" />
          <h1>OBGYN</h1>
        </div>
        
        {/* Search Field */}
        <div className="search-container">
          <input
            type="text"
            className="search-field"
            placeholder="Search for services, patients, or appointments..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-btn">Search</button>
        </div>

       

        {/* Navigation */}
        <nav className="admin-nav">
          <ul>
            <li 
              onClick={() => handleNavClick("Overview")} 
              style={{ cursor: 'pointer' }}
              className={activeSection === "Overview" ? "active" : ""}
            >
              Overview
            </li>
            <li 
              onClick={() => handleNavClick("Manage")} 
              style={{ cursor: 'pointer' }}
              className={activeSection === "Manage" ? "active" : ""}
            >
              Manage
            </li>
            <li 
              onClick={() => handleNavClick("Patients")} 
              style={{ cursor: 'pointer' }}
              className={activeSection === "Patients" ? "active" : ""}
            >
              Patients
            </li>
          </ul>
        </nav>

        {/* Sections */}
        {activeSection === "Overview" && (
          <section className="content">
            <div className="records-container">
              <div className="section-header">
                <h2>Appointment Management</h2>
              </div>

              {/* Calendar and Time Selection Container */}
              <div className="records-section">
                <h2>Schedule Overview</h2>
                <div className="schedule-container">
                  <div className="calendar-wrapper">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateCalendar
                        onChange={handleDateChange}
                        shouldDisableDate={disablePastDates}
                      />
                    </LocalizationProvider>
                  </div>

                  <div className="time-selection">
                    <div className="date-time-info">
                      <p className="selected-date">
                        {selectedDate
                          ? `Selected Date: ${new Date(selectedDate).toLocaleDateString()}`
                          : 'No date selected'}
                      </p>

                      <div className="appointment-time-picker">
                        <label htmlFor="appointment-time-select" className="appointment-label">
                          Select a Time:
                        </label>
                        <select
                          id="appointment-time-select"
                          className="appointment-dropdown"
                          value={selectedTime}
                          onChange={handleSelection}
                        >
                          <option value="" disabled>Choose a time slot</option>
                          <option value="7am">7:00 AM - 8:00 AM</option>
                          <option value="8am">8:00 AM - 9:00 AM</option>
                          <option value="9am">9:00 AM - 10:00 AM</option>
                          <option value="10am">10:00 AM - 11:00 AM</option>
                          <option value="11am">11:00 AM - 12:00 PM</option>
                          <option value="12pm">12:00 PM - 1:00 PM</option>
                          <option value="1pm">1:00 PM - 2:00 PM</option>
                          <option value="2pm">2:00 PM - 3:00 PM</option>
                          <option value="3pm">3:00 PM - 4:00 PM</option>
                          <option value="4pm">4:00 PM - 5:00 PM</option>
                        </select>
                      </div>

                      <div className="remaining-slots">
                        <p>Available Slots: </p>
                        <span className="slot-count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointments Table */}
              <div className="records-section">
                <h2>Today's Appointments</h2>
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Patient Name</th>
                        <th>Time</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients.map((patient) => (
                        <tr key={patient.id}>
                          <td>{patient.name}</td>
                          <td>{selectedTime}</td>
                          <td>
                            <button 
                              className="view-appointment-button"
                              onClick={() => handleViewAppointment(patient.id)}
                            >
                              <FileText className="icon" />
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}
        {activeSection === "Manage" && (
          <section className="manage">
          <div className='edit-apt'>
            <img src="src/assets/manage.png" alt="Manage Appointments" />
            <h2>Remove or Edit Patient Appointment</h2>
          </div>
          
          <div className="search-patient">
            <input type="text" id="patient-id" placeholder="Enter patient ID" />
            <button className="search-btn">Search</button> 
          </div>
          
          <h2>Edit Available Slots</h2>
          <ul>
            <li>
              <a>7:00-8:00 am</a>
              <div className="edit-slot">
                <p>Available Slots</p>
                <input type="number" min="0" max="10" defaultValue="3" />
              </div>
            </li>
            <li>
              <a>8:00-9:00 am</a>
              <div className="edit-slot">
                <p>Available Slots</p>
                <input type="number" min="0" max="10" defaultValue="3" />
              </div>
            </li>
            <li>
              <a>9:00-10:00 am</a>
              <div className="edit-slot">
                <p>Available Slots</p>
                <input type="number" min="0" max="10" defaultValue="3" />
              </div>
            </li>
            <li>
              <a>10:00-11:00 am</a>
              <div className="edit-slot">
                <p>Available Slots</p>
                <input type="number" min="0" max="10" defaultValue="3" />
              </div>
            </li>
            <li>
              <a>11:00-12:00 pm</a>
              <div className="edit-slot">
                <p>Available Slots</p>
                <input type="number" min="0" max="10" defaultValue="3" />
              </div>
            </li>
            <li>
              <a>12:00-1:00 pm</a>
              <div className="edit-slot">
                <p>Available Slots</p>
                <input type="number" min="0" max="10" defaultValue="3" />
              </div>
            </li>
            <li>
              <a>1:00-2:00 pm</a>
              <div className="edit-slot">
                <p>Available Slots</p>
                <input type="number" min="0" max="10" defaultValue="3" />
              </div>
            </li>
            <li>
              <a>2:00-3:00 pm</a>
              <div className="edit-slot">
                <p>Available Slots</p>
                <input type="number" min="0" max="10" defaultValue="3" />
              </div>
            </li>
            <li>
              <a>3:00-4:00 pm</a>
              <div className="edit-slot">
                <p>Available Slots</p>
                <input type="number" min="0" max="10" defaultValue="3" />
              </div>
            </li>
            <li>
              <a>4:00-5:00 pm</a>
              <div className="edit-slot">
                <p>Available Slots</p>
                <input type="number" min="0" max="10" defaultValue="3" />
              </div>
            </li>
          </ul>
        </section>
        
        )}
        {activeSection === "Patients" && (
           <section className="patients">
           <div>
             <h2>Appointment Status</h2>
             {/* Dropdown for appointment status */}
             <select value={status} onChange={handleStatusChange}>
               <option value="Scheduled">Scheduled</option>
               <option value="Completed">Completed</option>
               <option value="Cancelled">Cancelled</option>
             </select>
           </div>
     
           <div className="patient-found">
             {/* Iterate through the patient list */}
             {patients
               .filter(patient => patient.status === status)
               .map(patient => (
                 <div key={patient.id}>
                   <img src="src/assets/test-profile.png" alt={`${patient.name}'s avatar`} />
                   <h2>{patient.name}</h2>
                   <button style={{ cursor: 'pointer' }}>View Request</button>
                 </div>
               ))}
           </div>
         </section>
        )}
      </section>
    </main>
  );
}

export default OBGYN_admin;