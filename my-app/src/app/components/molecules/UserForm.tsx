// src/app/components/molecules/UserForm.tsx

import React from "react";
import { User } from "../../utils/types";
import InputField from "../atoms/Input";
import Button from "../atoms/Button"; // Import Button for submission

// Define props for your UserForm component
interface UserFormProps {
  user: User; // Expecting a User type
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle input changes
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; // Function to handle form submission
}

const UserForm: React.FC<UserFormProps> = ({ user, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputField 
        label="Name" 
        value={user.name} 
        onChange={onInputChange} // Pass onChange
        name="name" // Specify name for the input
      />
      <InputField 
        label="Email" 
        value={user.email} 
        onChange={onInputChange} // Pass onChange
        name="email" // Specify name for the input
      />
      <Button type="submit">Add User</Button> {/* Add submit button */}
    </form>
  );
};

export default UserForm;
