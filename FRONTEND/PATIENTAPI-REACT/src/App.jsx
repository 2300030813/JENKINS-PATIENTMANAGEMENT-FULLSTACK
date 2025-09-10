import { useState, useEffect } from "react";
import AddPatient from "./components/AddPatient";
import PatientList from "./components/PatientList";
import "./App.css";

function App() {
  const [patients, setPatients] = useState([]);
  const [editPatient, setEditPatient] = useState(null); // state for patient being edited

  // Fetch patients from backend on page load
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("http://localhost:2010/patientapi/all");
        const data = await res.json();
        setPatients(data);
      } catch (err) {
        console.error("Error fetching patients:", err);
      }
    };
    fetchPatients();
  }, []);

  // Add or update patient in state
  const handleAddPatient = (patient) => {
    if (editPatient) {
      // Update existing patient in list
      setPatients(patients.map((p) => (p.id === patient.id ? patient : p)));
      setEditPatient(null); // reset edit state
    } else {
      setPatients([...patients, patient]);
    }
  };

  // Delete patient via backend
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:2010/patientapi/delete/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setPatients(patients.filter((p) => p.id !== id));
      } else {
        console.error("Delete failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Edit patient handler
  const handleEdit = (patient) => {
    setEditPatient(patient); // populate AddPatient form for editing
  };

  return (
    <div className="App">
      <h1>Patient Management</h1>
      {/* Pass editPatient state and setter to AddPatient */}
      <AddPatient
        addPatientToList={handleAddPatient}
        editPatient={editPatient}
        setEditPatient={setEditPatient}
      />
      {/* Pass handleEdit and handleDelete to PatientList */}
      <PatientList
        patients={patients}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
