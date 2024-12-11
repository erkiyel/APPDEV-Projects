import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DeveloperPage.css"

const DeveloperPage = () => {
  const [vouches, setVouches] = useState(() => {
    return parseInt(localStorage.getItem("vouches")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("vouches", vouches);
  }, [vouches]);

  return (
    <div className="developer-page">
      <h2>Developers</h2>
      <p>Website crafted by Erckiel Cazel P. Olores</p>
      <button onClick={() => setVouches(vouches + 1)}>
        Vouch for Us ({vouches})
      </button>
      <br />
      <Link to={`/employee/1`}>
        <button>View Erckiel Cazel P. Olores Resume</button>
      </Link>
    </div>
  );
};

export default DeveloperPage;
