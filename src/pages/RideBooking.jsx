import { useState } from "react";
import { Link } from "react-router-dom";

const RideBooking = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideConfirmed, setRideConfirmed] = useState(false);

  const handleBookRide = () => {
    // Mock ride booking logic
    setRideConfirmed(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book a Ride</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={{ padding: "8px" }}
        />
        <button
          onClick={handleBookRide}
          style={{ marginLeft: "10px", padding: "8px 16px" }}
        >
          Book Ride
        </button>
      </div>

      {rideConfirmed && <p>Ride Confirmed!</p>}

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/history">
          <button style={{ marginRight: "10px", padding: "8px 16px" }}>
            Ride History
          </button>
        </Link>
        <Link to="/profile">
          <button style={{ padding: "8px 16px" }}>Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default RideBooking;
