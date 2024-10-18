// pages/users.tsx

import React, { useState } from 'react';
import { User } from '@/app/utils/types'; // Import the User type
import { fetchData } from '../lib/fetchApi'; // Import the fetchData function
import InputField from '@/app/components/atoms/Input'; // Import your InputField component
import Button from '@/app/components/atoms/Button'; // Import your Button component



interface UserListProps {
  users: User[]; // Props for the component
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [newUser, setNewUser] = useState<{ name: string; email: string }>({
    name: '',
    email: '',
  });
  const [userList, setUserList] = useState<User[]>(users); // Manage user list state

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleAddUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate adding a user to the API
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Re-fetch users after adding a new user
        const updatedUsers = await fetchData(); // Re-fetch user data
        setUserList(updatedUsers); // Update the users state with new data
        setNewUser({ name: '', email: '' }); // Reset the form
      } else {
        console.error("Failed to add user");
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userList.map(user => (
          <li key={user.id}>{user.name}</li> // Display user names
        ))}
      </ul>

      <h2>Add User</h2>
      <form onSubmit={handleAddUser}>
        <InputField
          label="Name"
          value={newUser.name}
          onChange={handleInputChange}
          name="name"
        />
        <InputField
          label="Email"
          value={newUser.email}
          onChange={handleInputChange}
          name="email"
        />
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

// Fetch user data on the server side
export const getServerSideProps = async () => {
  const users = await fetchData(); // Fetch user data using your function

  return {
    props: {
      users, // Pass the fetched user data as props to the component
    },
  };
};

export default UserList;
