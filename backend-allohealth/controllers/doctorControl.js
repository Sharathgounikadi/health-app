// Dummy doctors data
let doctors = [
    { id: 1, name: "Dr. John Doe", specialty: "Cardiology", hospital: "General Hospital", phone: "123-456-7890", email: "john.doe@example.com" },
    { id: 2, name: "Dr. Jane Smith", specialty: "Pediatrics", hospital: "Children's Hospital", phone: "987-654-3210", email: "jane.smith@example.com" }
  ];
  
  // Controller for getting all doctors
  exports.getAllDoctors = (req, res) => {
    res.json(doctors);
  };
  
  // Controller for getting a doctor by ID
  exports.getDoctorById = (req, res) => {
    const doctor = doctors.find(d => d.id === parseInt(req.params.id));
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    res.json(doctor);
  };
  
  // Controller for adding a new doctor
  exports.createDoctor = (req, res) => {
    const newDoctor = {
      id: doctors.length + 1,
      ...req.body
    };
    doctors.push(newDoctor);
    res.status(201).json(newDoctor);
  };
  
  // Controller for updating a doctor's information
  exports.updateDoctor = (req, res) => {
    const doctor = doctors.find(d => d.id === parseInt(req.params.id));
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
  
    Object.assign(doctor, req.body);
    res.json(doctor);
  };
  
  // Controller for deleting a doctor
  exports.deleteDoctor = (req, res) => {
    const doctorIndex = doctors.findIndex(d => d.id === parseInt(req.params.id));
    if (doctorIndex === -1) return res.status(404).json({ error: "Doctor not found" });
  
    doctors.splice(doctorIndex, 1);
    res.status(204).send();
  };
  