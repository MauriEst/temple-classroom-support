import axios from 'axios';
import type { ISupportRequestForm } from '../types';

// Create an 'instance' of axios with the base URL of your Django API
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Your Django server address
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Submits the support request form data to the backend API.
 * @param data The form data from the React component
 * @returns The response from the server
 */
export const submitSupportRequest = (data: ISupportRequestForm) => {
  // This sends the POST request to http://127.0.0.1:8000/api/requests/submit/
  return apiClient.post('/requests/submit/', data);
};