import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RideHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch ride history from API
    const fetchHistory = async () => {
      const historyData = [
        { id: 1, date: "2023-09-25", from: "Location A", to: "Location B" },
        { id: 2, date: "2023-09-26", from: "Location C", to: "Location D" },
      ];
      setHistory(historyData);
    };
    fetchHistory();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ride History</h1>
      <ul>
        {history.map((ride) => (
          <li key={ride.id}>
            {ride.date}: {ride.from} → {ride.to}
          </li>
        ))}
      </ul>

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/">
          <button style={{ marginRight: "10px", padding: "8px 16px" }}>
            Book a Ride
          </button>
        </Link>
        <Link to="/profile">
          <button style={{ padding: "8px 16px" }}>Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default RideHistory;
