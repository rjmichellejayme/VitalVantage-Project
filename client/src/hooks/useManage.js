import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth, db } from "../fb/index";

const useManage = () => {
  const [userData, setUserData] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    phoneNumber: "",
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUserData({
              fname: data.fname || "",
              mname: data.mname || "",
              lname: data.lname || "",
              email: user.email || "",
              phoneNumber: data.phoneNumber || "",
            });
          }
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Map form fields to Firestore field names
    const firestoreKeyMap = {
      firstName: "fname",
      middleName: "mname",
      lastName: "lname",
      email: "email",
      phoneNumber: "phoneNumber",
    };
  
    const firestoreKey = firestoreKeyMap[name] || name;
  
    setUserData((prev) => ({
      ...prev,
      [firestoreKey]: value, // Update the correct Firestore key
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const updateUserDetails = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef, {
          fname: userData.fname,
          mname: userData.mname,
          lname: userData.lname,
          email: userData.email,
          phoneNumber: userData.phoneNumber,
        });
      }
    } catch (err) {
      setError(err.message);
    }
  };  


  const updateUserPassword = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const { currentPassword, newPassword } = passwordData;
  
        // Reauthenticate user with current password
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(user, credential);
  
        // If reauthentication succeeds, proceed to update password
        await updatePassword(user, newPassword);
      }
    } catch (err) {
      // Handle reauthentication and other errors
      if (err.code === "auth/wrong-password") {
        throw new Error("The current password is incorrect.");
      } else if (err.code === "auth/too-many-requests") {
        throw new Error("Too many attempts. Please try again later.");
      } else {
        throw new Error(err.message);
      }
    }
  };
  
  

  return { userData, loading, error, updateUserDetails, updateUserPassword, handleInputChange, handlePasswordChange, passwordData };
};

export default useManage;
