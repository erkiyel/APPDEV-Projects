import React from "react";
import { useParams } from "react-router-dom";

const EmployeeResume = () => {
  const { employeeId } = useParams();

  return (
    <div className="employee-resume">
      <h2>Resume for Employee {employeeId}</h2>
      <p>Details about the employee's qualifications and experience.</p>
    </div>
  );
};

export default EmployeeResume;
