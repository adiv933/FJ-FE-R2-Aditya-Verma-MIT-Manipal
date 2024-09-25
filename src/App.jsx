import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RideBooking from "./pages/RideBooking";
import RideHistory from "./pages/RideHistory";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RideBooking />} />
        <Route path="/history" element={<RideHistory />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
