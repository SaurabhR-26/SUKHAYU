const catchAsync = require("../shared/catchAsync");
const sendResponse = require("../shared/sendResponseS");
const { AdminService } = require("./AdminService");

const getAllAdmin = catchAsync(async (req, res) => {
    const result = await AdminService.getAllAdmin();
    sendResponse(res, {
        statusCode: 200,
        message: 'Successfully Retrieve All Admin !!',
        success: true,
        data: result,
    });
});
//params=ID
const getSingleAdmin = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await AdminService.getSingleAdmin(id);
    sendResponse(res, {
        statusCode: 200,
        message: 'Successfully Get Single Admin !!',
        success: true,
        data: result,
    });
});
//params=ID
const deleteAdmin = catchAsync(async (req, res) => {
    const { id } = req.params;
    await AdminService.deleteAdmin(id);
    sendResponse(res, {
        statusCode: 200,
        message: 'Successfully Deleted Admin !!',
        success: true,
    });
});

//all the fields with data
//params=ID
const updateAdmin = catchAsync(async (req, res) => {
    const { ...adminInfo } = req.body;
    const { id } = req.params;
    const result = await AdminService.updateAdmin(id, adminInfo);
    sendResponse(res, {
        statusCode: 200,
        message: 'Successfully Updated Admin informations !!',
        success: true,
        data: result,
    });
});

const AdminController = {
    deleteAdmin,
    getAllAdmin,
    getSingleAdmin,
    updateAdmin
};

module.exports = { AdminController };
