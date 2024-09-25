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
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px" }}
        />
        <button
          onClick={handleUpdateProfile}
          style={{ marginLeft: "10px", padding: "8px 16px" }}
        >
          Update Profile
        </button>
      </div>

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/">
          <button style={{ marginRight: "10px", padding: "8px 16px" }}>
            Book a Ride
          </button>
        </Link>
        <Link to="/history">
          <button style={{ padding: "8px 16px" }}>Ride History</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
