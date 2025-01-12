import React, { useState, useEffect } from "react";
import axios from "axios";

const BookAppointment = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    disease: "",
    doctorId: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Fetch all patients
  useEffect(() => {
    axios
      .get('https://health-app-helg.onrender.com/api/patients')
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => console.error("Error fetching patients:", error));
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or edit a patient
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update patient
      axios
        .put(`https://health-app-helg.onrender.com/api/patients/${editingId}`, formData)
        .then((response) => {
          setPatients((prev) =>
            prev.map((patient) =>
              patient.id === editingId ? response.data : patient
            )
          );
          resetForm();
        })
        .catch((error) => console.error("Error updating patient:", error));
    } else {
      // Create new patient
      axios
        .post("/api/patients", formData)
        .then((response) => {
          setPatients((prev) => [...prev, response.data]);
          resetForm();
        })
        .catch((error) => console.error("Error adding patient:", error));
    }
  };

  // Delete a patient
  const handleDelete = (id) => {
    axios
      .delete(`/api/patients/${id}`)
      .then(() => {
        setPatients((prev) => prev.filter((patient) => patient.id !== id));
      })
      .catch((error) => console.error("Error deleting patient:", error));
  };

  // Edit a patient
  const handleEdit = (patient) => {
    setIsEditing(true);
    setEditingId(patient.id);
    setFormData({
      name: patient.name,
      age: patient.age,
      gender: patient.gender,
      disease: patient.disease,
      doctorId: patient.doctorId,
    });
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      age: "",
      gender: "",
      disease: "",
      doctorId: "",
    });
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div>
      <h1>Book Appointment</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          name="disease"
          placeholder="Disease"
          value={formData.disease}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="doctorId"
          placeholder="Doctor ID"
          value={formData.doctorId}
          onChange={handleChange}
          required
        />
        <button type="submit">{isEditing ? "Update" : "Add"} Patient</button>
        {isEditing && <button onClick={resetForm}>Cancel</button>}
      </form>

      <h2>Patient List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.disease} - {patient.gender} - {patient.age}{" "}
            years
            <button onClick={() => handleEdit(patient)}>Edit</button>
            <button onClick={() => handleDelete(patient.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookAppointment;
