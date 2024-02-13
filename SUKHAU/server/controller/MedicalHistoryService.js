const { MadicalHistoryModel } = require("../model/MedicalHistory");

const createMadicalHistory = async (payload) => {
    const result = await MadicalHistoryModel.create(payload);
    return result;
}

const getAllMadicalHistory = async () => {
    const result = await MadicalHistoryModel.find();
    return result;
}

const getSingleMadicalHistory = async (id) => {
    const result = await MadicalHistoryModel.findOne({ _id: id });
    return result;
}

const deleteMadicalHistory = async (id) => {
    await MadicalHistoryModel.findOneAndDelete({ _id: id });
}

const updateMadicalHistory = async (id, payload) => {
    const result = await MadicalHistoryModel.findOneAndUpdate({ _id: id }, payload);
    return result;
}

module.exports = {
    updateMadicalHistory,
    getAllMadicalHistory,
    getSingleMadicalHistory,
    deleteMadicalHistory,
    createMadicalHistory
};
