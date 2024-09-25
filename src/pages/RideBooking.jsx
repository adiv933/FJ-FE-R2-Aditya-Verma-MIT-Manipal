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
    <div>
      <h1>Book a Ride</h1>
      <div>
        <input
          type="text"
          placeholder="Pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={handleBookRide}>Book Ride</button>
      </div>

      {rideConfirmed && <p>Ride Confirmed!</p>}

      {/* Navigation Buttons */}
      <div>
        <Link to="/history">
          <button>Ride History</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default RideBooking;
