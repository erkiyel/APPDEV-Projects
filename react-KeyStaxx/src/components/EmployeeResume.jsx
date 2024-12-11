import React from "react";
import "./EmployeeResume.css"

const EmployeeResume = () => {
  return (
    <div className="employee-resume">
      <h2>Resume for Employee: Erckiel Cazel P. Olores</h2>
      
      <h3>Position: Developer</h3>
      
      <h4>Contact Information:</h4>
      <p>Email: erk.olores@gmail.com</p>
      <p>Phone: (123) 456-7890</p>
      
      <h4>Professional Summary:</h4>
      <p>
        Enthusiastic and dedicated developer with a passion for creating
        innovative and user-friendly software. Proven experience in building
        high-quality web applications using React, JavaScript, and modern
        development practices. Focused on improving user experiences and
        delivering clean, efficient code.
      </p>

      <h4>Skills:</h4>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React.js & Vite</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
        <li>Version Control (Git, GitHub)</li>
        <li>Responsive Design</li>
        <li>Agile Methodologies</li>
      </ul>

      <h4>Experience:</h4>
      <div className="section-title">KeyStaxx - Developer</div>
      <div className="section-content">
        <p>July 2024 - Present</p>
        <ul>
          <li>Developed and maintained web applications with React and Vite</li>
          <li>Collaborated with team members to design and implement user interfaces</li>
          <li>Worked with RESTful APIs to integrate data from various sources</li>
          <li>Ensured the application’s responsiveness and cross-browser compatibility</li>
        </ul>
      </div>

      <h4>Education:</h4>
      <div className="section-title">Bachelor's Degree in Computer Science</div>
      <div className="section-content">
        <p>University of Baguio, Graduated in 2028</p>
      </div>

      <h4>Certifications:</h4>
      <ul>
        <li>Certified React Developer - 2024</li>
        <li>Full Stack Web Development Certificate - 2023</li>
      </ul>

      <h4>Languages:</h4>
      <ul>
        <li>English (Fluent)</li>
        <li>Filipino (Native)</li>
      </ul>
    </div>
  );
};

export default EmployeeResume;
