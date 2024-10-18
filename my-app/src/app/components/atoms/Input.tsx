// src/app/components/atoms/Input.tsx

import React from "react";

interface InputFieldProps {
  label: string;
  value: string; // Assuming value is a string for input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange prop
  name: string; // Add name prop for identification
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, name }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} name={name} /> {/* Use value and onChange */}
    </div>
  );
};

export default InputField;
