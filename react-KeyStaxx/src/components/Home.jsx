import React from "react";
import { useNavigate } from "react-router-dom";
import MissionVision from "./MissionVision";

const Home = () => {
  const navigate = useNavigate();

  const navigateToShowcase = () => {
    navigate("/showcase");
  };

  return (
    <div className="home">
      <h2>Welcome to KeyStaxx</h2>
      <p>
        Creating artisan and regular keyboards for all. Whether you're an office
        worker or a PC enthusiast, we’ve got the perfect keyboard for you.
      </p>
      <MissionVision />
      <button onClick={navigateToShowcase} className="toggle-showcase-button">
        Go to Client and Employee Feedback
      </button>
    </div>
  );
};

export default Home;
