import React from "react";

function InputField({ label, type, name ,placeholder,onChange,value }) {
  return (
    <div className="mb-4">
      <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="inputClass"
      />
    </div>
  );
}

export default React.memo(InputField);
