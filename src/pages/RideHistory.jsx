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
    <div>
      <h1>Ride History</h1>
      <ul>
        {history.map((ride) => (
          <li key={ride.id}>
            {ride.date}: {ride.from} → {ride.to}
          </li>
        ))}
      </ul>

      {/* Navigation Buttons */}
      <div>
        <Link to="/">
          <button>Book a Ride</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default RideHistory;
