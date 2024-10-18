// lib/fetchApi.ts

import { API_URL } from '@/app/utils/constants'; // Import API URL constant
import { User } from '@/app/utils/types'; // Import User type
import axios from 'axios';

export const fetchData = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(API_URL); // Using the constant here
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
