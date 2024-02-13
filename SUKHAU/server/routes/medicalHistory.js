const express = require('express');
const { getSingleMadicalHistory, getAllMadicalHistory, createMadicalHistory, updateMadicalHistory, deleteMadicalHistory } = require('../controller/MedicalHistory');

const router = express.Router();

router.get('/:id', getSingleMadicalHistory);
router.post('/create', createMadicalHistory);
router.get('/', getAllMadicalHistory);
router.patch('/:id', updateMadicalHistory);
router.delete('/:id', deleteMadicalHistory);

module.exports = router;
