import React from 'react';
import Navbar from './components/Navbar';
import NewPatientForm from './components/NewPatientForm';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <NewPatientForm />
    </div>
  );
}

export default App;
