// src/app/components/atoms/Button.tsx

import React from "react";

interface ButtonProps {
  children: React.ReactNode; // Allow children of any type
  onClick?: () => void; // Optional onClick handler
  type?: "button" | "submit"; // Define button type
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button" }) => (
  <button onClick={onClick} type={type} style={{ padding: '10px', cursor: 'pointer' }}>
    {children}
  </button>
);

export default Button;
