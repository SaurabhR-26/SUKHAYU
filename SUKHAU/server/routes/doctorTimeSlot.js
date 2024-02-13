const express = require('express');
const  auth  = require('../middlewares/auth');
// const { AuthUser } = require('../../../enums');
const  doctorTimeSlotController  = require('../controller/TimeSlot');

// Your Node.js code using the required modules goes here

const router = express.Router();

router.get('/my-slot',auth( "doctor"), doctorTimeSlotController.getMyTimeSlot);
router.get('/:id', auth("doctor"), doctorTimeSlotController.getTimeSlot);
router.get('/appointment-time/:id', auth("patient", "doctor"), doctorTimeSlotController.getAppointmentTimeOfEachDoctor);
router.post('/create', auth("doctor"), doctorTimeSlotController.createTimeSlot);
router.get('/', doctorTimeSlotController.getAllTimeSlot);
// router.get('/',(req,res)=>console.log("hellow "))
router.patch('/', auth("doctor"), doctorTimeSlotController.updateTimeSlot);
router.delete('/', auth("doctor"), doctorTimeSlotController.deleteTimeSlot);

module.exports = router;