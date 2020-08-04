import React, { useState } from "react";
import { filterCharacters } from "../../api/helpers";

export const FormInput = ({ setSearchedData }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (currentValue) => {
    setSearchValue(currentValue);
    filterCharacters(setSearchedData, searchValue);
  };
  return (
    <div className="form-group">
      <label htmlFor="searchInput" className="sr-only">
        Search
      </label>
      <input
        type="text"
        className="form-control"
        id="searchInput"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
