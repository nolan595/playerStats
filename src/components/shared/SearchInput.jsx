import React from "react";

const SearchInput = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="flex-grow p-3 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
    />
  );
};

export default SearchInput;
