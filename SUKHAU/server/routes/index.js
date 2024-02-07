const AuthRouter  =require ('./auth');
const express  =require('express');
const router = express.Router();
// import { PatientRouter } 


const moduleRoutes = [
    // {
    //     path: '/doctor',
    //     route: DoctorRouter,
    // },
    // {
    //     path: '/review',
    //     route: ReviewRouter,
    // },
    {
        path: '/auth',
        route: AuthRouter,
    },
    // {
    //     path: '/patient',
    //     route: PatientRouter,
    // },
    // {
    //     path: '/appointment',
    //     route: AppointmentRouter,
    // },
    // {
    //     path: '/prescription',
    //     route: PrescriptionRouter,
    // },
    // {
    //     path: '/favourite',
    //     route: FavouriteRouter,
    // },
    // {
    //     path: '/timeslot',
    //     route: DoctorTimeSlotRouter,
    // },
    // {
    //     path: '/blogs',
    //     route: BlogRoutes,
    // }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route));
module.exports= router;
