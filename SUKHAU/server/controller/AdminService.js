// const { IAdmin } = require("./admin.interface");
const { AdminModel } = require("../model/Admin");

const getAllAdmin = async () => {
    const result = await AdminModel.find();
    return result;
}

const getSingleAdmin = async (payload) => {
    const result = await AdminModel.findOne({ _id: payload });
    return result;
}

const deleteAdmin = async (payload) => {
    await AdminModel.findOneAndDelete({ _id: payload });
}

const updateAdmin = async (adminId, payload) => {
    const result = await AdminModel.findOneAndUpdate({ _id: adminId }, payload);
    return result;
}

module.exports = {
    AdminService: {
        getAllAdmin,
        getSingleAdmin,
        deleteAdmin,
        updateAdmin
    }
};
