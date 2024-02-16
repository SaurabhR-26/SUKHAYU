const express = require('express');
const auth = require('../middlewares/auth'); // Corrected import syntax
// const { AuthUser } = require('../../../enums'); // Corrected import syntax
const PrescriptionController = require('../controller/Prescription'); // Corrected import syntax

// Now you can use these modules in your Node.js application

const router = express.Router();

router.get('/doctor/prescription', auth('doctor'), PrescriptionController.getDoctorPrescriptionById);
router.get('/patient/prescription', auth('patient'), PrescriptionController.getPatientPrescriptionById);

router.get('/:id', PrescriptionController.getPrescriptionById); // tested
router.get('/', PrescriptionController.getAllPrescriptions); //tested

router.post('/create', auth('doctor', 'admin'), PrescriptionController.createPrescription);

router.delete('/:', auth('doctor', 'admin'), PrescriptionController.deletePrescription);
router.patch('/', auth('doctor', 'admin'), PrescriptionController.updatePrescription);
module.exports = router;
