import React from "react";

const Searchbox = ({ searchChange }) => {
  return (
    <div className="pa2 tc">
      <input
        className="ba bg-white bg-lightest-blue b--green tc "
        type="text"
        placeholder="Search"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
