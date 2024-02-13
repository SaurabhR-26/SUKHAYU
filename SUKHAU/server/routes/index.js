const AuthRouter  =require ('./auth');
const DoctorRouter=require("./doctor")
const PatientRouter=require("./patient")
const AppointmentRouter=require("./appoinment")
const DoctorTimeSlotRouter =require("./doctorTimeSlot")
const MedicalHistory = require('./medicalHistory')
const express  =require('express');
const router = express.Router();



const moduleRoutes = [
    {
        path: '/doctor',
        route: DoctorRouter,
    },
    // {
    //     path: '/review',
    //     route: ReviewRouter,
    // },
    {
        path: '/auth',
        route: AuthRouter,
    },
    {
        path: '/patient',
        route: PatientRouter,
    },
    {
        path: '/appointment',
        route: AppointmentRouter,
    },
    // {
    //     path: '/prescription',
    //     route: PrescriptionRouter,
    // },
    // {
    //     path: '/favourite',
    //     route: FavouriteRouter,
    // },
    {
        path: '/timeslot',
        route: DoctorTimeSlotRouter,
    },
    // {
    //     path: '/blogs',
    //     route: BlogRoutes,
    // }
    {
        path: '/medicalhistory',
        route: MedicalHistory,
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route));
module.exports= router;
