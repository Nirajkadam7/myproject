import React, { useState } from 'react';

const NewPatientForm = () => {
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    dob: '',
    occupation: '',
    contactNo: '',
    address: '',
  });

  const [diagnosis, setDiagnosis] = useState({
    symptoms: '',
    duration: '',
    other: '',
  });

  const [physicalExamination, setPhysicalExamination] = useState({
    pulse: '',
    respirationRate: '',
    bloodPressure: '',
    temperature: '',
  });

  const [history, setHistory] = useState({
    medicineHistory: '',
    pastIllnessHistory: '',
    familyHistory: '',
  });

  const [personalHabits, setPersonalHabits] = useState({
    breakfast: '',
    exercise: '',
    addictions: '',
    travel: '',
    screenTime: '',
    sleepTime: '',
    fastFoodIntake: '',
    otherHabits: '',
  });

  const [gynecologicalHistory, setGynecologicalHistory] = useState({
    menstrualCycle: {
      date: '',
      regularity: '',
      days: '',
      pain: '',
    },
  });

  const handlePersonalDetailsChange = (event) => {
    const { name, value } = event.target;
    setPersonalDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDiagnosisChange = (event) => {
    const { name, value } = event.target;
    setDiagnosis((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhysicalExaminationChange = (event) => {
    const { name, value } = event.target;
    setPhysicalExamination((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleHistoryChange = (event) => {
    const { name, value } = event.target;
    setHistory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePersonalHabitsChange = (event) => {
    const { name, value } = event.target;
    setPersonalHabits((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleGynecologicalHistoryChange = (event) => {
    const { name, value } = event.target;
    setGynecologicalHistory((prevState) => ({
      ...prevState,
      menstrualCycle: {
        ...prevState.menstrualCycle,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform save action here with the form data
    console.log('Form submitted:', {
      personalDetails,
      diagnosis,
      physicalExamination,
      history,
      personalHabits,
      gynecologicalHistory,
    });
  };

  return (
    <div className="new-patient-form">
      <h2>New Patient Form</h2>
      <form onSubmit={handleSubmit}>
        <h3>Personal Details:</h3>
        <label>Name:</label>
        <input type="text" name="name" value={personalDetails.name} onChange={handlePersonalDetailsChange} />

        <label>Age:</label>
        <input type="number" name="age" value={personalDetails.age} onChange={handlePersonalDetailsChange} />

        <label>Gender:</label>
        <select name="gender" value={personalDetails.gender} onChange={handlePersonalDetailsChange}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* Add the remaining fields */}
        <label>Weight:</label>
        <input type="text" name="weight" value={personalDetails.weight} onChange={handlePersonalDetailsChange} />

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={personalDetails.dob} onChange={handlePersonalDetailsChange} />

        <label>Occupation:</label>
        <input type="text" name="occupation" value={personalDetails.occupation} onChange={handlePersonalDetailsChange} />

        <label>Contact No:</label>
        <input type="text" name="contactNo" value={personalDetails.contactNo} onChange={handlePersonalDetailsChange} />

        <label>Address:</label>
        <textarea name="address" value={personalDetails.address} onChange={handlePersonalDetailsChange}></textarea>

        <h3>Diagnosis:</h3>
        <label>Patient complaints:</label>
        <input type="text" name="symptoms" value={diagnosis.symptoms} onChange={handleDiagnosisChange} />

        <label>Duration:</label>
        <input type="text" name="duration" value={diagnosis.duration} onChange={handleDiagnosisChange} />

        <label>Other:</label>
        <textarea name="other" value={diagnosis.other} onChange={handleDiagnosisChange}></textarea>

        <h3>Physical Examination:</h3>
        <label>Pulse:</label>
        <input type="text" name="pulse" value={physicalExamination.pulse} onChange={handlePhysicalExaminationChange} />

        <label>Respiration rate:</label>
        <input type="text" name="respirationRate" value={physicalExamination.respirationRate} onChange={handlePhysicalExaminationChange} />

        <label>Blood Pressure:</label>
        <input type="text" name="bloodPressure" value={physicalExamination.bloodPressure} onChange={handlePhysicalExaminationChange} />

        <label>Temperature:</label>
        <input type="text" name="temperature" value={physicalExamination.temperature} onChange={handlePhysicalExaminationChange} />

        <h3>History:</h3>
        <label>H/O medicine:</label>
        <input type="text" name="medicineHistory" value={history.medicineHistory} onChange={handleHistoryChange} />

        <label>H/O past illness:</label>
        <input type="text" name="pastIllnessHistory" value={history.pastIllnessHistory} onChange={handleHistoryChange} />

        <label>Family history:</label>
        <textarea name="familyHistory" value={history.familyHistory} onChange={handleHistoryChange}></textarea>

        <h3>Personal Habits:</h3>
        <label>Breakfast:</label>
        <input type="text" name="breakfast" value={personalHabits.breakfast} onChange={handlePersonalHabitsChange} />

        {/* Add the remaining fields */}
        <label>Exercise:</label>
        <input type="text" name="exercise" value={personalHabits.exercise} onChange={handlePersonalHabitsChange} />

        <label>Addictions:</label>
        <input type="text" name="addictions" value={personalHabits.addictions} onChange={handlePersonalHabitsChange} />

        <label>Traveling:</label>
        <input type="text" name="travel" value={personalHabits.travel} onChange={handlePersonalHabitsChange} />

        <label>Screen Time:</label>
        <input type="text" name="screenTime" value={personalHabits.screenTime} onChange={handlePersonalHabitsChange} />

        <label>Sleep Time:</label>
        <input type="text" name="sleepTime" value={personalHabits.sleepTime} onChange={handlePersonalHabitsChange} />

        <label>Fast food intake:</label>
        <input type="text" name="fastFoodIntake" value={personalHabits.fastFoodIntake} onChange={handlePersonalHabitsChange} />

        <label>Other:</label>
        <textarea name="otherHabits" value={personalHabits.otherHabits} onChange={handlePersonalHabitsChange}></textarea>

        <h3>Gynecological History:</h3>
        <label>Menstrual cycle date:</label>
        <input type="date" name="date" value={gynecologicalHistory.menstrualCycle.date} onChange={handleGynecologicalHistoryChange} />

        <label>Regularity:</label>
        <input type="text" name="regularity" value={gynecologicalHistory.menstrualCycle.regularity} onChange={handleGynecologicalHistoryChange} />

        <label>No. of days:</label>
        <input type="number" name="days" value={gynecologicalHistory.menstrualCycle.days} onChange={handleGynecologicalHistoryChange} />

        <label>Pain:</label>
        <select name="pain" value={gynecologicalHistory.menstrualCycle.pain} onChange={handleGynecologicalHistoryChange}>
          <option value="">Select</option>
          <option value="Severe">Severe</option>
          <option value="Normal">Normal</option>
        </select>

        <button type="button">Next</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NewPatientForm;
