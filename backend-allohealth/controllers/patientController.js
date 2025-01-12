// Dummy patients data
let patients = [
  {"id": 1, "name": "Alice Johnson", "age": 45, "gender": "Female", "disease": "Hypertension", "doctorId": 1},
  {"id": 2, "name": "Bob Williams", "age": 30, "gender": "Male", "disease": "Asthma", "doctorId": 2},
  {"id": 3, "name": "Carla Peterson", "age": 60, "gender": "Female", "disease": "Diabetes", "doctorId": 3},
  {"id": 4, "name": "David Brown", "age": 25, "gender": "Male", "disease": "Allergy", "doctorId": 1},
  {"id": 5, "name": "Emily Davis", "age": 35, "gender": "Female", "disease": "Thyroid Disorder", "doctorId": 4},
  {"id": 6, "name": "Frank Harris", "age": 50, "gender": "Male", "disease": "Heart Disease", "doctorId": 2},
  {"id": 7, "name": "Grace Lee", "age": 40, "gender": "Female", "disease": "Arthritis", "doctorId": 3},
  {"id": 8, "name": "Henry Clark", "age": 28, "gender": "Male", "disease": "Migraines", "doctorId": 4},
  {"id": 9, "name": "Ivy Martin", "age": 52, "gender": "Female", "disease": "Chronic Pain", "doctorId": 1},
  {"id": 10, "name": "Jack Wilson", "age": 65, "gender": "Male", "disease": "Cancer", "doctorId": 5}
]

  
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
  