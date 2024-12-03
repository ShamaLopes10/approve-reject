import React from 'react';
import RequestForm from './components/RequestForm';
import RequestApproval from './components/RequestApproval';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <h1>University Event & Venue Booking</h1>
      <RequestForm />
      <RequestApproval />
    </div>
  );
};

export default App;

