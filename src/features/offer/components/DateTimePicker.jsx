import React from "react";

const DateTimePicker = ({ value, onChange }) => {
  return (
    <input
      type="datetime-local"
      value={value}
      onChange={onChange}
      className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
    />
  );
};

export default DateTimePicker;
