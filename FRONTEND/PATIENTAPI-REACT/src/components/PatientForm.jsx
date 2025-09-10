import { useState, useEffect } from "react";

function PatientForm({ addOrUpdatePatient, editPatient }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    age: "",
    gender: "",
    email: "",
    contact: "",
    disease: "",
  });

  useEffect(() => {
    if (editPatient) {
      setForm(editPatient);
    }
  }, [editPatient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.name || !form.age || !form.gender || !form.email || !form.contact || !form.disease) {
      return;
    }
    addOrUpdatePatient(form);
    setForm({
      id: "",
      name: "",
      age: "",
      gender: "",
      email: "",
      contact: "",
      disease: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="Patient ID"
        value={form.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Patient Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Patient Age"
        value={form.age}
        onChange={handleChange}
      />
      <select name="gender" value={form.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="contact"
        placeholder="Contact Number"
        value={form.contact}
        onChange={handleChange}
      />
      <input
        type="text"
        name="disease"
        placeholder="Disease"
        value={form.disease}
        onChange={handleChange}
      />
      <button type="submit">
        {editPatient ? "Update Patient" : "Add Patient"}
      </button>
    </form>
  );
}

export default PatientForm;
