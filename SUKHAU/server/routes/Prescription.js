import express from 'express';
import { auth } from '../../middlewares/auth';
import { AuthUser } from '../../../enums';
import { PrescriptionController } from './prescription.controller';

const router = express.Router();

router.get('/doctor/prescription', auth('doctor'), PrescriptionController.getDoctorPrescriptionById);
router.get('/patient/prescription', auth('patient'), PrescriptionController.getPatientPrescriptionById);

router.get('/:id', PrescriptionController.getPrescriptionById);
router.get('/', PrescriptionController.getAllPrescriptions);

router.post('/create', auth('doctor','admin'), PrescriptionController.createPrescription);

router.delete('/:', auth('doctor', 'admin'), PrescriptionController.deletePrescription);
router.patch('/', auth('doctor', 'admin'), PrescriptionController.updatePrescription);

export const PrescriptionRouter = router;