import React from "react";
import "./CompanyProfile.css";

const employees = [
  { id: 1, name: "Erckiel Cazel P. Olores", position: "CEO", parent: null },
  { id: 2, name: "Erckiel Cazel P. Olores", position: "Designer", parent: 1 },
  { id: 3, name: "Erckiel Cazel P. Olores", position: "Marketing Manager", parent: 1 },
  { id: 4, name: "Erckiel Cazel P. Olores", position: "Sales Lead", parent: 3 },
  { id: 5, name: "Erckiel Cazel P. Olores", position: "Product Manager", parent: 1 },
  { id: 6, name: "Erckiel Cazel P. Olores", position: "Lead Developer", parent: 5 },
];

const createTree = (employees, parent) =>
  employees
    .filter((emp) => emp.parent === parent)
    .map((emp) => ({
      ...emp,
      children: createTree(employees, emp.id),
    }));

const renderTree = (nodes) =>
  nodes.map((node) => (
    <li key={node.id}>
      <div className="employee">
        <h3>{node.name}</h3>
        <p>{node.position}</p>
      </div>
      {node.children.length > 0 && (
        <ul className="subtree">{renderTree(node.children)}</ul>
      )}
    </li>
  ));

const CompanyProfile = () => {
  const employeeTree = createTree(employees, null);
  return (
    <div className="company-profile">
      <h1>Company Profile</h1>
      <ul className="tree">{renderTree(employeeTree)}</ul>
    </div>
  );
};

export default CompanyProfile;
