import { useState, useEffect } from 'react';
import { db } from '../fb';
import { doc, getDoc, collection, addDoc, Timestamp } from 'firebase/firestore'; 
import { getAuth } from 'firebase/auth';

export const useAppointment = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [emergencyContactEmail, setEmergencyContactEmail] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [doctorID, setDoctorID] = useState(null); // For doctor selection later
  const [wantsEMed, setWantsEMed] = useState(false); // State for eMed checkbox
  const [firstNotes, setFirstNotes] = useState('');  // State for prenatal notes
  const [secondNotes, setSecondNotes] = useState('');  // State for postnatal notes
  const [thirdNotes, setThirdNotes] = useState('');
  const [clinic, setClinic] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;  // Get the authenticated user
        if (user) {
          const userDocRef = doc(db, 'users', user.uid); // Use the Firebase Auth UID here
          const userSnap = await getDoc(userDocRef);
          if (userSnap.exists()) {
            const userData = userSnap.data();
            setUserDetails(userData);
            setName(`${userData.fname} ${userData.mname || ''} ${userData.lname} ${userData.extension || ''}`);
            setEmail(userData.email);
            setContactNumber(userData.phoneNumber);
          }
        } else {
          alert("No authenticated user found.");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        alert("Error fetching user details: " + error.message);
      }
    };

    fetchUserDetails();
  }, []);

  const handleAppointment = async () => {
    try {
      const appointmentRef = collection(db, 'appointments');

      const selectedDateTimestamp = selectedDate ? Timestamp.fromDate(new Date(selectedDate)) : null;

      const newAppointmentDoc = await addDoc(appointmentRef, {
        userID: userDetails.uniqueID, // Ensure the userID is correctly set
        selectedServices,
        selectedDate: selectedDateTimestamp,
        selectedTime,
        patientInfo: {
          fullName: name,
          dob,
          contactNumber,
          email,
        },
        emergencyContact: {
          name: emergencyContact,
          phone: emergencyContactNumber,
          email: emergencyContactEmail,
        },
        notes: {
            firstService: firstNotes,
            secondService: secondNotes,
            thirdService: thirdNotes,
        },
        doctorID: null,
        clinic,
        status: "pending",
        wantsEMed,
        createdAt: new Date(),
      });
    } catch (error) {
      alert("Error creating appointment: " + error.message);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'full-name') {
        setName(value);
    } else if (name === 'dob') {
        setDob(value);
    } else if (name === 'phone-number') {
        setContactNumber(value);
    } else if (name === 'email') {
        setEmail(value);
    } else if (name === 'emergency-name') {
        setEmergencyContact(value);
    } else if (name === 'emergency-phone') {
        setEmergencyContactNumber(value);
    } else if (name === 'emergency-email') {
        setEmergencyContactEmail(value);
    }
  };

  // Handle checkbox change
  const handleEMedCheckboxChange = (event) => {
    setWantsEMed(event.target.checked);
  };
  
  const handleFirstNotesChange = (e) => {
    setFirstNotes(e.target.value);
  };

  const handleSecondNotesChange = (e) => {
    setSecondNotes(e.target.value);
  };

  const handleThirdNotesChange = (e) => {
    setThirdNotes(e.target.value);
  };

  return {
    name,
    dob,
    contactNumber,
    email,
    emergencyContact,
    emergencyContactNumber,
    emergencyContactEmail,
    userDetails,
    selectedServices,
    selectedDate,
    selectedTime,
    doctorID,
    wantsEMed,
    handleAppointment,
    handleInputChange,
    handleEMedCheckboxChange, 
    handleFirstNotesChange,
    handleSecondNotesChange,
    handleThirdNotesChange,
    setSelectedServices,
    setSelectedDate,
    setSelectedTime,
    firstNotes,
    secondNotes,
    thirdNotes,
    setClinic,
  };
};

export default useAppointment;
