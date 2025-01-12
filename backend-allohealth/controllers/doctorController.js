// Dummy doctors data
let doctors = [
  { 
    id: 1, 
    name: "Dr. John Doe", 
    specialty: "Cardiology", 
    experience: 2, 
    phone: "123-456-7890", 
    email: "john.doe@example.com", 
    description: "An experienced cardiologist specializing in diagnosing and treating heart-related conditions." 
  },
  { 
    id: 2, 
    name: "Dr. Jane Smith", 
    specialty: "Pediatrics", 
    experience: 8, 
    phone: "987-654-3210", 
    email: "jane.smith@example.com", 
    description: "A compassionate pediatrician with extensive experience in caring for children's health." 
  },
  { 
    id: 3, 
    name: "Dr. Emily Carter", 
    specialty: "Dermatology", 
    experience: 5, 
    phone: "555-123-4567", 
    email: "emily.carter@example.com", 
    description: "A skilled dermatologist focused on skin treatments and improving dermatological health." 
  },
  { 
    id: 4, 
    name: "Dr. Michael Brown", 
    specialty: "Orthopedics", 
    experience: 10, 
    phone: "444-789-1234", 
    email: "michael.brown@example.com", 
    description: "An orthopedic specialist helping patients recover from injuries and improve mobility." 
  },
  { 
    id: 5, 
    name: "Dr. Sarah Wilson", 
    specialty: "Neurology", 
    experience: 7, 
    phone: "333-456-7890", 
    email: "sarah.wilson@example.com", 
    description: "A neurologist dedicated to treating brain and nervous system disorders with care." 
  },
  { 
    id: 6, 
    name: "Dr. Daniel Lee", 
    specialty: "Gastroenterology", 
    experience: 6, 
    phone: "222-654-9876", 
    email: "daniel.lee@example.com", 
    description: "An expert in digestive health, specializing in diagnosing and managing gastrointestinal issues." 
  },
  { 
    id: 7, 
    name: "Dr. Laura Martinez", 
    specialty: "Oncology", 
    experience: 12, 
    phone: "111-321-6549", 
    email: "laura.martinez@example.com", 
    description: "An oncologist focused on cancer treatment and research to improve patient outcomes." 
  },
  { 
    id: 8, 
    name: "Dr. Robert Johnson", 
    specialty: "Psychiatry", 
    experience: 9, 
    phone: "666-789-0123", 
    email: "robert.johnson@example.com", 
    description: "A psychiatrist offering mental health support and therapy for various psychological conditions." 
  },
  { 
    id: 9, 
    name: "Dr. Olivia Davis", 
    specialty: "Ophthalmology", 
    experience: 4, 
    phone: "777-456-1230", 
    email: "olivia.davis@example.com", 
    description: "An ophthalmologist dedicated to eye care, including surgeries and vision correction." 
  },
  { 
    id: 10, 
    name: "Dr. William Harris", 
    specialty: "General Medicine", 
    experience: 3, 
    phone: "888-123-9876", 
    email: "william.harris@example.com", 
    description: "A general practitioner providing comprehensive medical care for patients of all ages." 
  }
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
  