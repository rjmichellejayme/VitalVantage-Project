import React from 'react';
import { Settings, FileText, FileCheck, Edit, Plus, Trash } from 'lucide-react';
import { Button } from "./components/ui/button";
import './scss/_recordandhistory.scss';
import NavBarHome from './NavBarHome';
import { useNavigate } from "react-router-dom";
import useFetchUserName from './hooks/useFetchUserName';

const RecordAndHistory = () => {
  const navigate = useNavigate();
  const firstName = useFetchUserName();

  const healthRecords = [
    {
      id: 1,
      sNo: 1,
      nameType: "Pneumonia",
      year: "2017",
    }
  ];

  const visitHistory = [
    {
      id: 1,
      date: "10/27/2023",
      visitNo: "0001",
      visitStatus: "Check up",
      service: "OB Gyne",
      physician: "Dr. Ana M. Cruz",
      emed: "Yes"
    }
  ];

  const appointmentStatus = [
    {
      id: 1,
      visitNo: "0001",
      dateTime: "2024-03-20 10:30 AM",
      service: "General Checkup",
      clinic: "Internal Medicine",
      physician: "Dr. John Smith",
      status: "Accepted",
      emed: "View"
    }
  ];

  const queueStatus = [
    {
      id: 1,
      currentNumber: "0005",
      yourNumber: "0008",
      estimatedTime: "20 mins",
      department: "OB-GYN",
      status: "Waiting"
    }
  ];

  return (
    <>
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
        <div className="record-container">
          <div className="content-wrapper">
            {/* Sidebar */}
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
                  className="nav-item active"
                  onClick={() => navigate('/records')}
                >
                  <FileText className="icon" size={20} />
                  Records and History
                </Button>
                <Button 
                  variant="ghost"
                  className="nav-item"
                  onClick={() => navigate('/e-med')}
                >
                  <FileCheck className="icon" size={20} />
                  E-Medical Certificate
                </Button>
              </nav>
            </aside>

            <main>
              <div className="form-section">
                <div className="records-container">
                  <div className="section-header">
                    <h2>Manage Records and Appointment History</h2>
                  </div>

                  {/* Visit History Section */}
                  <div className="records-section">
                    <h2>Appointment History</h2>
                    <div className="table-container">
                      <table>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Visit No.</th>
                            <th>Visit Status</th>
                            <th>Service</th>
                            <th>Physician</th>
                            <th>E-med</th>
                          </tr>
                        </thead>
                        <tbody>
                          {visitHistory.map((visit) => (
                            <tr key={visit.id}>
                              <td>{visit.date}</td>
                              <td>{visit.visitNo}</td>
                              <td>{visit.visitStatus}</td>
                              <td>{visit.service}</td>
                              <td>{visit.physician}</td>
                              <td>{visit.emed}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Appointment Status Section */}
                  <div className="records-section">
                    <h2>Appointment Status</h2>
                    <div className="table-container">
                      <table>
                        <thead>
                          <tr>
                            <th>Visit No.</th>
                            <th>Date & Time</th>
                            <th>Service</th>
                            <th>Clinic</th>
                            <th>Physician</th>
                            <th>Status</th>
                            <th>E-med</th>
                          </tr>
                        </thead>
                        <tbody>
                          {appointmentStatus.map((appointment) => (
                            <tr key={appointment.id}>
                              <td>{appointment.visitNo}</td>
                              <td>{appointment.dateTime}</td>
                              <td>{appointment.service}</td>
                              <td>{appointment.clinic}</td>
                              <td>{appointment.physician}</td>
                              <td>
                                <span className={`status-badge ${appointment.status.toLowerCase()}`}>
                                  {appointment.status}
                                </span>
                              </td>
                              <td>
                                <Button
                                  variant="link"
                                  className="e-med-link"
                                  onClick={() => navigate('/e-med?view=true')}
                                >
                                  {appointment.emed}
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Queue Status Section - Now placed at the bottom */}
                  <div className="records-section">
                    <h2>Current Queue Status</h2>
                    <div className="table-container">
                      <table>
                        <thead>
                          <tr>
                            <th>Current Number</th>
                            <th>Your Number</th>
                            <th>Estimated Wait Time</th>
                            <th>Department</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {queueStatus.map((queue) => (
                            <tr key={queue.id}>
                              <td>{queue.currentNumber}</td>
                              <td>
                                <span className="queue-number">{queue.yourNumber}</span>
                              </td>
                              <td>{queue.estimatedTime}</td>
                              <td>{queue.department}</td>
                              <td>
                                <span className={`status-badge ${queue.status.toLowerCase()}`}>
                                  {queue.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              </div>
            </main>
          </div>
        </div>
    </>
  );
};

export default RecordAndHistory;