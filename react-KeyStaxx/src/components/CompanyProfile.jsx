import React from "react";
import { Link } from "react-router-dom";

const employees = [
  { id: 1, name: "John Doe", position: "CEO" },
  { id: 2, name: "Jane Smith", position: "Designer" },
];

const CompanyProfile = () => {
  return (
    <div className="company-profile">
      <h2>Our Team</h2>
      {employees.map((emp) => (
        <Link key={emp.id} to={`/profile/${emp.id}`} className="employee">
          <h3>{emp.name}</h3>
          <p>{emp.position}</p>
        </Link>
      ))}
    </div>
  );
};

export default CompanyProfile;
