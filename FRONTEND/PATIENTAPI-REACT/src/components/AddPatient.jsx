import { useState, useEffect } from "react";
import API_URL from "../config";   // import directly

const AddPatient = ({ addPatientToList, editPatient, setEditPatient }) => {
  const [patient, setPatient] = useState({
    id: "",
    name: "",
    age: "",
    gender: "",
    disease: "",
    email: "",
    contact: ""
  });

  const [message, setMessage] = useState("");

  // Fill form when editing
  useEffect(() => {
    if (editPatient) {
      setPatient(editPatient);
    }
  }, [editPatient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = editPatient
        ? `${API_URL}/update`
        : `${API_URL}/add`;

      const method = editPatient ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: parseInt(patient.id),
          name: patient.name,
          age: parseInt(patient.age),
          gender: patient.gender,
          disease: patient.disease,
          email: patient.email,
          contact: patient.contact
        })
      });

      const data = await response.json();

      if (response.ok) {
        addPatientToList(data);
        setMessage(editPatient ? "Patient updated successfully!" : "Patient added successfully!");
        setPatient({
          id: "",
          name: "",
          age: "",
          gender: "",
          disease: "",
          email: "",
          contact: ""
        });
        if (editPatient) setEditPatient(null);
      } else {
        setMessage(`Error: ${data}`);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setMessage("Failed to submit patient. Check console for details.");
    }
  };

  return (
    <div>
      <h2>{editPatient ? "Edit Patient" : "Add Patient"}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="number"
          name="id"
          placeholder="Patient ID"
          value={patient.id}
          onChange={handleChange}
          disabled={editPatient ? true : false}
        />
        <input type="text" name="name" placeholder="Name" value={patient.name} onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" value={patient.age} onChange={handleChange} />
        <input type="text" name="gender" placeholder="Gender" value={patient.gender} onChange={handleChange} />
        <input type="text" name="disease" placeholder="Disease" value={patient.disease} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={patient.email} onChange={handleChange} />
        <input type="text" name="contact" placeholder="Contact" value={patient.contact} onChange={handleChange} />
        <button type="submit">{editPatient ? "Update Patient" : "Add Patient"}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddPatient;
