const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Use the routes
app.use('/api/doctors', doctorRoutes);
app.use('/api/patients', patientRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
