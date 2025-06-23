import React from "react";

const ToggleSwitch = ({ checked, onChange, id }) => {
  return (
    <label
      htmlFor={id}
      className="inline-flex relative cursor-pointer select-none items-center"
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-purple-600 transition-colors duration-200"></div>
      <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full border border-gray-300 peer-checked:translate-x-full peer-checked:border-purple-600 transition-transform duration-200"></div>
    </label>
  );
};

export default ToggleSwitch;
