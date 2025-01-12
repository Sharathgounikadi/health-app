import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is properly configured

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    disease: "",
    doctorId: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (currently just logs the data)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
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
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Book Appointment</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter patient name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="age" className="text-sm font-medium text-gray-600 mb-1">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter age"
            value={formData.age}
            onChange={handleChange}
            required
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="gender" className="text-sm font-medium text-gray-600 mb-1">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="disease" className="text-sm font-medium text-gray-600 mb-1">
            Disease
          </label>
          <input
            type="text"
            id="disease"
            name="disease"
            placeholder="Enter disease"
            value={formData.disease}
            onChange={handleChange}
            required
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="doctorId" className="text-sm font-medium text-gray-600 mb-1">
            Doctor ID
          </label>
          <input
            type="number"
            id="doctorId"
            name="doctorId"
            placeholder="Enter Doctor ID"
            value={formData.doctorId}
            onChange={handleChange}
            required
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
