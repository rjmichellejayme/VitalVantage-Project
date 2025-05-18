import React, { useState } from 'react';
import { FileText, Edit, Plus, X } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Select } from "./components/ui/select";
import { Input } from "./components/ui/input";
import './scss/_recordandhistory.scss';
import Header_p from './Header_p';
import NavBarHome from './NavBarHome';
import { useNavigate } from 'react-router-dom';

const AdminViewAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentStatus, setAppointmentStatus] = useState('Pending');

  const patientAppointment = {
    patientName: "John Doe",
    patientId: "P12345",
    contactNumber: "+63 912 345 6789",
    email: "johndoe@email.com",
    appointmentDetails: {
      dateTime: "2024-03-20 10:30 AM",
      service: "General Checkup",
      clinic: "Internal Medicine",
      status: "Pending"
    }
  };

  const doctors = [
    "Dr. John Smith",
    "Dr. Ana M. Cruz",
    "Dr. Maria Santos",
    "Dr. James Wilson"
  ];

  const navigate = useNavigate();

  const handleDoctorAssignment = () => {
    console.log("Selected doctor:", selectedDoctor);
  };

  const handleStatusChange = (newStatus) => {
    setAppointmentStatus(newStatus);
  };

  const handleSaveChanges = () => {
    console.log("Changes saved");
    const finalStatus = appointmentStatus === "Accepted" ? "Completed" : appointmentStatus;
    
    console.log("Saving with:", {
      patientName: patientAppointment.patientName,
      status: finalStatus
    });
    
    navigate('/OBGYN_admin', { 
      state: { 
        updatedAppointment: true,
        patientName: patientAppointment.patientName,
        appointmentStatus: finalStatus
      } 
    });
  };

  return (
    <>
      <Header_p />
      <NavBarHome />
      <div className="record-container">
        <div className="content-wrapper">
          <main>
            <div className="form-section">
              <div className="records-container">
                <div className="section-header">
                  <h2>Appointment Management</h2>
                </div>

                <div className="records-section">
                  <h2>Overview</h2>
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>Last Update</th>
                          <th>Appointment Status</th>
                          <th>Assigned Doctor</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{new Date().toLocaleString()}</td>
                          <td>
                            <span className={`status-badge ${
                              appointmentStatus === "Accepted" ? "accepted" : 
                              appointmentStatus === "Rejected" ? "rejected" : 
                              "none"
                            }`}>
                              {appointmentStatus || "None"}
                            </span>
                          </td>
                          <td>
                            <span className={`assigned-doctor ${!selectedDoctor && 'none'}`}>
                              {selectedDoctor || "None"}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Patient Information Section - Updated to table format */}
                <div className="records-section">
                  <h2>Patient Information</h2>
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>Patient Name</th>
                          <th>Patient ID</th>
                          <th>Contact Number</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{patientAppointment.patientName}</td>
                          <td>{patientAppointment.patientId}</td>
                          <td>{patientAppointment.contactNumber}</td>
                          <td>{patientAppointment.email}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Appointment Details Section */}
                <div className="records-section">
                  <h2>Appointment Details</h2>
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>Visit No.</th>
                          <th>Date & Time</th>
                          <th>Service</th>
                          <th>Clinic</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{patientAppointment.appointmentDetails.visitNo}</td>
                          <td>{patientAppointment.appointmentDetails.dateTime}</td>
                          <td>{patientAppointment.appointmentDetails.service}</td>
                          <td>{patientAppointment.appointmentDetails.clinic}</td>
                          <td>
                            <div className="status-radio-group">
                              <label className="radio-label">
                                <input
                                  type="radio"
                                  name="appointmentStatus"
                                  value="Accepted"
                                  checked={appointmentStatus === "Accepted"}
                                  onChange={(e) => handleStatusChange(e.target.value)}
                                />
                                <span className="radio-text accepted">Accept</span>
                              </label>
                              <label className="radio-label">
                                <input
                                  type="radio"
                                  name="appointmentStatus"
                                  value="Rejected"
                                  checked={appointmentStatus === "Rejected"}
                                  onChange={(e) => handleStatusChange(e.target.value)}
                                />
                                <span className="radio-text rejected">Reject</span>
                              </label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {appointmentStatus === "Rejected" ? (
                  <div className="records-section">
                    <h2>Rejection Note</h2>
                    <div className="rejection-container">
                      <textarea
                        className="rejection-note"
                        placeholder="Please provide a reason for rejecting this appointment..."
                        value={rejectionNote}
                        onChange={(e) => setRejectionNote(e.target.value)}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="records-section">
                    <h2>Admin Actions</h2>
                    <div className="table-container">
                      <table>
                        <thead>
                          <tr>
                            <th>Action Type</th>
                            <th>Selection</th>
                            <th>Current Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Doctor Assignment</td>
                            <td>
                              <select 
                                className="admin-select"
                                value={selectedDoctor}
                                onChange={(e) => setSelectedDoctor(e.target.value)}
                              >
                                <option value="">Select a doctor</option>
                                {doctors.map((doctor, index) => (
                                  <option key={index} value={doctor}>
                                    {doctor}
                                  </option>
                                ))}
                              </select>
                            </td>
                            <td>
                              <span className="assigned-doctor">
                                {selectedDoctor || "No doctor assigned"}
                              </span>
                            </td>
                            <td>
                              {selectedDoctor ? (
                                <span className="doctor-status available">Available</span>
                              ) : (
                                <span className="doctor-status unavailable">Not Available</span>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Save Changes Button */}
                <div className="save-changes-container">
                  <Button 
                    className="save-button"
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </Button>
                </div>

              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminViewAppointment;
