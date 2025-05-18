import { useState } from "react";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { FileText, Settings, FileCheck } from "lucide-react";
import NavBarHome from "./NavBarHome";
import { useNavigate } from "react-router-dom";
import useManage from "./hooks/useManage";
import useFetchUserName from './hooks/useFetchUserName';

export default function ManageProfile() {
  const firstName = useFetchUserName();
  const navigate = useNavigate();
  const { userData, loading, updateUserDetails, updateUserPassword, handleInputChange, handlePasswordChange, passwordData } = useManage();
  const [phoneCountry, setPhoneCountry] = useState("PH");

  const handleSaveChanges = async () => {
    if (!userData.fname || !userData.lname || !userData.email) {
      alert("Please fill in all required fields!");
      return;
    }
    try {
      await updateUserDetails();
      alert("Profile updated successfully!");
    } catch (error) {
      alert(`Failed to update profile: ${error.message}`);
    }
  };
  

  const handleChangePassword = async () => {
    const { newPassword, confirmPassword, currentPassword } = passwordData;
  
    // Check if all fields are filled
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill in all password fields!");
      return;
    }
  
    // Check if passwords match
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Check for minimum password strength (e.g., at least 6 characters)
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }
  
    try {
      await updateUserPassword();
      alert("Password changed successfully!");
    } catch (error) {
      alert(`Failed to change password: ${error.message}`);
    }
  };
  

  return (
    <>
      <NavBarHome />
      <div className="profile-container">
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
        <div className="content-wrapper">
          <aside>
            <nav>
              <Button variant="ghost" className="nav-item active" onClick={() => navigate("/ManageProfile")}>
                <Settings className="icon" size={20} />
                Manage Profile
              </Button>
              <Button variant="ghost" className="nav-item" onClick={() => navigate("/records")}>
                <FileText className="icon" size={20} />
                Records and History
              </Button>
              <Button variant="ghost" className="nav-item" onClick={() => navigate("/e-med")}>
                <FileCheck className="icon" size={20} />
                E-Medical Certificate
              </Button>
            </nav>
          </aside>

          <main>
            <div className="form-section">
              <div className="user-details-section">
                <h2>User Details</h2>
                <div className="input-group">
                  <Label>Name</Label>
                  <div className="name-fields">
                    <Input name="fname" value={userData.fname} onChange={handleInputChange} />
                    <Input name="mname" value={userData.mname} onChange={handleInputChange} />
                    <Input name="lname" value={userData.lname} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="input-group">
                  <Label>Email</Label>
                  <Input name="email" value={userData.email} onChange={handleInputChange} />
                </div>
                <div className="input-group">
                  <Label>Phone Number</Label>
                  <div className="phone-input">
                    <Select value={phoneCountry} onValueChange={setPhoneCountry}>
                      <SelectTrigger>
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PH">🇵🇭 +63</SelectItem>
                        <SelectItem value="US">🇺🇸 +1</SelectItem>
                        <SelectItem value="UK">🇬🇧 +44</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input name="phoneNumber" value={userData.phoneNumber} onChange={handleInputChange} />
                  </div>
                </div>
                <Button className="btn-primary" onClick={handleSaveChanges}>
                  Save Changes
                </Button>
              </div>

              <div className="password-section">
                <h2>Password</h2>
                <div className="input-group">
                  <Label>Current Password</Label>
                  <Input name="currentPassword" type="password" value={passwordData.currentPassword} onChange={handlePasswordChange} />
                </div>
                <div className="input-group">
                  <Label>New Password</Label>
                  <Input name="newPassword" type="password" value={passwordData.newPassword} onChange={handlePasswordChange} />
                </div>
                <div className="input-group">
                  <Label>Confirm New Password</Label>
                  <Input name="confirmPassword" type="password" value={passwordData.confirmPassword} onChange={handlePasswordChange} />
                </div>
                <Button className="btn-primary" onClick={handleChangePassword}>
                  Change Password
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
