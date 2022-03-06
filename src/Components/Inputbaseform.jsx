import React from "react";

const Inputbaseform = ({ title, firstvalue, setFirstValue, lastvalue, setLastValue }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <label>FirstName:</label>
        <input
          type="text"
          placeholder="Please give your name..."
          value={firstvalue}
          onChange={(e) => setFirstValue(e.target.value)}
        />
      </div>
      <div>
        <label>Lastname:</label>
        <input
          type="text"
          placeholder="Please give password..."
          value={lastvalue}
          onChange={(e) => setLastValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default Inputbaseform;
