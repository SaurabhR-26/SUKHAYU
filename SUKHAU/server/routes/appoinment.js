// https://github.com/RahulRevanna11/SUKHAU.git
const express = require('express');
const auth  = require('../middlewares/auth')
// const { AuthUser } = require('../../../enums');
const { AppointmentController } = require('../controller/Appoinment');

const router = express.Router();

router.get('/', AppointmentController.getAllAppointment);

router.get('/patient/appointments',auth('patient'), AppointmentController.getPatientAppointmentById);
router.get('/patient/invoices',auth('patient'), AppointmentController.getPatientPaymentInfo);
router.get('/doctor/invoices',auth('doctor'), AppointmentController.getDoctorInvoices);

router.get('/doctor/appointments',auth('doctor'), AppointmentController.getDoctorAppointmentsById);
router.get('/doctor/patients',auth('doctor'), AppointmentController.getDoctorPatients);

router.get('/patient-payment-info/:id',auth('patient'), AppointmentController.getPaymentInfoViaAppintmentId);

router.post('/create',auth('patient'), AppointmentController.createAppointment);

router.get('/:id', AppointmentController.getAppointment);

router.delete('/:id', AppointmentController.deleteAppointment);
router.patch('/:id', auth("admin", 'doctor', 'patient'),AppointmentController.updateAppointment);
//doctor side
router.patch('/doctor/update-appointment',auth('doctor'), AppointmentController.updateAppointmentByDoctor);


module.exports = router;
