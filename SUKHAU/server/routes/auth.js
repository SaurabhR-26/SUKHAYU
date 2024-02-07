const express=require('express');
const { Login,signUp} =require ('../controller/Auth');

const router = express.Router();

router.post('/login', Login);
router.post('/signin', signUp);
module.exports= router;