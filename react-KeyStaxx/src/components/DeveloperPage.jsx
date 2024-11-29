import React, { useState } from "react";

const DeveloperPage = () => {
  const [vouches, setVouches] = useState(0);

  return (
    <div className="developer-page">
      <h2>Developers</h2>
      <p>Website crafted by Erckiel Cazel P.Olores</p>
      <button onClick={() => setVouches(vouches + 1)}>
        Vouch for Us ({vouches})
      </button>
    </div>
  );
};

export default DeveloperPage;
