import React from "react";

const Inputbaseform = ({ title, firstvalue, setFirstValue, lastvalue, setLastValue, onChangeErrorMessage }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <label>FirstName:</label>
        <input
          type="text"
          placeholder="Please give your name..."
          maxLength={30}
          value={firstvalue}
          onChange={(e) => setFirstValue(e.target.value)}
          onKeyUp={onChangeErrorMessage}
        />
      </div>
      <div>
        <label>Lastname:</label>
        <input
          type="text"
          placeholder="Please give password..."
          maxLength={30}
          value={lastvalue}
          onChange={(e) => setLastValue(e.target.value)}
          onKeyUp={onChangeErrorMessage}
        />
      </div>
    </>
  );
};

export default Inputbaseform;
