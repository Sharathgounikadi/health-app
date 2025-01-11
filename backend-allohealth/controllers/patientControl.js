// Dummy patients data
let patients = [
    { id: 1, name: "Alice Johnson", age: 45, gender: "Female", disease: "Hypertension", doctorId: 1 },
    { id: 2, name: "Bob Williams", age: 30, gender: "Male", disease: "Asthma", doctorId: 2 }
  ];
  
  // Controller for getting all patients
  exports.getAllPatients = (req, res) => {
    res.json(patients);
  };
  
  // Controller for getting a patient by ID
  exports.getPatientById = (req, res) => {
    const patient = patients.find(p => p.id === parseInt(req.params.id));
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    res.json(patient);
  };
  
  // Controller for adding a new patient
  exports.createPatient = (req, res) => {
    const newPatient = {
      id: patients.length + 1,
      ...req.body
    };
    patients.push(newPatient);
    res.status(201).json(newPatient);
  };
  
  // Controller for updating a patient's information
  exports.updatePatient = (req, res) => {
    const patient = patients.find(p => p.id === parseInt(req.params.id));
    if (!patient) return res.status(404).json({ error: "Patient not found" });
  
    Object.assign(patient, req.body);
    res.json(patient);
  };
  
  // Controller for deleting a patient
  exports.deletePatient = (req, res) => {
    const patientIndex = patients.findIndex(p => p.id === parseInt(req.params.id));
    if (patientIndex === -1) return res.status(404).json({ error: "Patient not found" });
  
    patients.splice(patientIndex, 1);
    res.status(204).send();
  };
  