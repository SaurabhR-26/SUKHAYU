const catchAsync = require('../../../shared/catchAsync');
const sendResponse = require('../../../shared/sendResponse');
const { MadicalHistoryService } = require('./madicalHistory.service');
const { IMadicalHistory } = require('./madicalHistory.interface');

const createMadicalHistory = catchAsync(async (req, res) => {
    const { ...patientInfo } = req.body;
    const result = await MadicalHistoryService.createMadicalHistory(patientInfo);
    sendResponse<IMadicalHistory>(res, {
        statusCode: 200,
        message: 'Successfully Madical History created !!',
        success: true,
        data: result,
    });
});

const getAllMadicalHistory = catchAsync(async (req, res) => {
    const result = await MadicalHistoryService.getAllMadicalHistory();
    sendResponse<IMadicalHistory[]>(res, {
        statusCode: 200,
        message: 'Successfully Retrieve All Madical History !!',
        success: true,
        data: result,
    });
});

const getSingleMadicalHistory = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await MadicalHistoryService.getSingleMadicalHistory(id);
    sendResponse<IMadicalHistory>(res, {
        statusCode: 200,
        message: 'Successfully Get Single Madical History !!',
        success: true,
        data: result,
    });
});

const deleteMadicalHistory = catchAsync(async (req, res) => {
    const { id } = req.params;
    await MadicalHistoryService.deleteMadicalHistory(id);
    sendResponse<IMadicalHistory>(res, {
        statusCode: 200,
        message: 'Successfully Deleted Madical History !!',
        success: true,
    });
});

const updateMadicalHistory = catchAsync(async (req, res) => {
    const { ...patientInfo } = req.body;
    const { id } = req.params;
    const result = await MadicalHistoryService.updateMadicalHistory(id, patientInfo);
    sendResponse<IMadicalHistory>(res, {
        statusCode: 200,
        message: 'Successfully Updated Madical History informations !!',
        success: true,
        data: result,
    });
});

module.exports = {
    createMadicalHistory,
    updateMadicalHistory,
    getSingleMadicalHistory,
    deleteMadicalHistory,
    getAllMadicalHistory
};
