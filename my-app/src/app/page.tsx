// app/page.tsx
"use client"; // Indicate this is a client component

import { useState, useEffect } from 'react';
import { fetchData } from "./components/lib/fetchApi";
import { User } from "./utils/types";
import UserTable from './components/organisms/UserTable';
import { Button, TextField, Container, Typography } from '@mui/material';

export const dynamic = "force-dynamic"; // ensures SSR

export default function Home() {
  // State for users and new user input
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Fetch user data on component mount
  useEffect(() => {
    const getUsers = async () => {
      const initialData: User[] = await fetchData(); // Await the fetch call
      setUsers(initialData); // Set the users state with fetched data
    };

    getUsers();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Handler for adding a new user
  const handleAddUser = () => {
    const newUser: User = {
      id: users.length + 1, // Generate a new ID
      name,
      email,
    };
    setUsers([...users, newUser]); // Update users state
    setName(''); // Reset name input
    setEmail(''); // Reset email input
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>User Details</Typography>
      
      {/* Form for adding a new user */}
      <form onSubmit={(e) => {
        e.preventDefault(); // Prevent form submission refresh
        handleAddUser(); // Add user on submit
      }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">Add User</Button>
      </form>

      {/* Display the table of users */}
      <UserTable users={users} />
    </Container>
  );
}
