import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ISupportRequestForm } from '../types/index';
import { submitSupportRequest } from '../services/api';

export const SupportForm: React.FC = () => {
  // --- State ---
  // A single state object to hold all form data
  const [formData, setFormData] = useState<ISupportRequestForm>({
    name: '',
    email: '',
    classroom: '',
    issue_type: 'projector', // Default value
    description: '',
  });

  // State for loading and error messages
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // React Router hook to redirect the user
  const navigate = useNavigate();

  // --- Handlers ---

  // A single handler that updates the state for any input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // The main submit logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Stop the browser from a full-page reload
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.classroom || !formData.description) {
      setError('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // This is where we call the API service!
      await submitSupportRequest(formData);
      
      // On success, redirect to the confirmation page
      navigate('/success');

    } catch (err) {
      console.error(err);
      setError('Failed to submit request. Please try again later.');
      setIsSubmitting(false);
    }
  };

  // --- JSX ---
  return (
    <form onSubmit={handleSubmit} className="support-form">
      
      {/* Show a global error message if 'error' state is set */}
      {error && <div className="form-error">{error}</div>}

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="classroom">Building and Classroom Number</label>
        <input
          type="text"
          id="classroom"
          name="classroom"
          value={formData.classroom}
          onChange={handleChange}
          placeholder="e.g., Anderson Hall 105"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="issue_type">Issue Type</label>
        <select
          id="issue_type"
          name="issue_type"
          value={formData.issue_type}
          onChange={handleChange}
        >
          <option value="projector">Projector Issue</option>
          <option value="computer">Computer/Login</option>
          <option value="audio">Audio/Microphone</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="description">Message</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          placeholder="Please describe the issue in detail..."
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-button" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};