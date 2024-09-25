import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");

  const handleUpdateProfile = () => {
    // Mock API call
    alert("Profile updated successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleUpdateProfile}>Update Profile</button>
      </div>

      {/* Navigation Buttons */}
      <div>
        <Link to="/">
          <button>Book a Ride</button>
        </Link>
        <Link to="/history">
          <button>Ride History</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
