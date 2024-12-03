import React, { useState } from 'react';
import api from '../services/api';

const RequestForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [venue, setVenue] = useState('');
  const [details, setDetails] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      eventName,
      eventDate,
      venue,
      details,
    };

    try {
      await api.post('/', formData);
      setMessage('Request submitted successfully');
    } catch (error) {
      setMessage('Error submitting request');
    }
  };

  return (
    <div>
      <h2>Request an Event or Venue</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
        </div>
        <div>
          <label>Event Date:</label>
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
        </div>
        <div>
          <label>Venue:</label>
          <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} required />
        </div>
        <div>
          <label>Details:</label>
          <textarea value={details} onChange={(e) => setDetails(e.target.value)} required />
        </div>
        <button type="submit">Submit Request</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RequestForm;

