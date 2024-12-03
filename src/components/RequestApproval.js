import React, { useState, useEffect } from 'react';
import api from '../services/api';

const RequestApproval = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await api.get('/');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleDecision = async (id, decision) => {
    try {
      await api.put(`/${id}`, { status: decision });
      setRequests(requests.filter(request => request.id !== id));
    } catch (error) {
      console.error('Error updating request status:', error);
    }
  };

  return (
    <div>
      <h2>Request Approval</h2>
      {requests.length === 0 ? (
        <p>No pending requests</p>
      ) : (
        requests.map(request => (
          <div key={request.id}>
            <h3>{request.eventName}</h3>
            <p>Event Date: {request.eventDate}</p>
            <p>Venue: {request.venue}</p>
            <p>Details: {request.details}</p>
            <button onClick={() => handleDecision(request.id, 'Approved')}>Approve</button>
            <button onClick={() => handleDecision(request.id, 'Rejected')}>Reject</button>
          </div>
        ))
      )}
    </div>
  );
};

export default RequestApproval;

