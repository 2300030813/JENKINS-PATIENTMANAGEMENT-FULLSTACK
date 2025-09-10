function PatientItem({ patient, onEdit, onDelete }) {
  return (
    <div className="patient-item">
      <div>
        <h3>{patient.name} (ID: {patient.id})</h3>
        <p>Age: {patient.age}</p>
        <p>Gender: {patient.gender}</p>
        <p>Email: {patient.email}</p>
        <p>Contact: {patient.contact}</p>
        <p>Disease: {patient.disease}</p>
      </div>
      <div className="buttons">
        <button onClick={onEdit}>Edit</button>
        <button className="delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default PatientItem;
