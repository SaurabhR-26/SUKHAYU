const express = require('express');
const { MadicalHistoryController } = require('./madicalHistory.controller');

const router = express.Router();

router.get('/:id', MadicalHistoryController.getSingleMadicalHistory);
router.post('/create', MadicalHistoryController.createMadicalHistory);
router.get('/', MadicalHistoryController.getAllMadicalHistory);
router.patch('/:id', MadicalHistoryController.updateMadicalHistory);
router.delete('/:id', MadicalHistoryController.deleteMadicalHistory);

module.exports = { MadicalHistoryRouter: router };
