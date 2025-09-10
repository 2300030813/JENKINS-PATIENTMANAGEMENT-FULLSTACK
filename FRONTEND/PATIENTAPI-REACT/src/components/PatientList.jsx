import PatientItem from "./PatientItem";

function PatientList({ patients, onEdit, onDelete }) {
  return (
    <div className="patient-list">
      {patients.length === 0 ? (
        <p>No patients available</p>
      ) : (
        patients.map((patient) => (
          <PatientItem
            key={patient.id}
            patient={patient}
            onEdit={() => onEdit(patient)}  // Calls handleEdit in App.jsx
            onDelete={() => onDelete(patient.id)}
          />
        ))
      )}
    </div>
  );
}

export default PatientList;
