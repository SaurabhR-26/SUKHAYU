

const {Doctor}=require('../model/Doctor');
const {DoctorTimeSlot}=require("../model/DoctorTimeSlot");
const {ScheduleDay}=require("../model/DoctorTimeSlot")
const moment=require('moment')
const createTimeSlot = async (user, payload) => {
    const { userId } = user;
    const isDoctor = await Doctor.findById(userId);
    if (!isDoctor) {
        throw new Error('Doctor Account is not found !!');
    }
    const result = await DoctorTimeSlot.create({
        day: payload.day,
        doctorId: userId,
        maximumPatient: payload.maximumPatient,
        weekDay: payload.weekDay,
        timeSlot: payload.timeSlot
    });
    return result;
};

const deleteTimeSlot = async (id) => {
    const result = await DoctorTimeSlot.findByIdAndDelete(id);
    return result;
};

const getTimeSlot = async (id) => {
    const result = await DoctorTimeSlot.findById(id);
    return result;
};

const getMyTimeSlot = async (user, filter) => {
    const { userId } = user;
    const isDoctor = await Doctor.findById(userId);
    if (!isDoctor) {
        throw new Error('Doctor Account is not found !!');
    }
    const whereCondition = { doctorId: userId };
    if (filter.day) {
        whereCondition.day = filter.day;
    }
    const result = await DoctorTimeSlot.find(whereCondition).populate('timeSlot');
    return result;
};

const getAllTimeSlot = async () => {
    const result = await DoctorTimeSlot.find().populate('timeSlot').populate('doctor', 'firstName lastName');
    return result;
};

const updateTimeSlot = async (user, id, payload) => {
    const { userId } = user;
    const isDoctor = await Doctor.findById(userId);
    if (!isDoctor) {
        throw new Error('Doctor Account is not found !!');
    }
    const { timeSlot, create } = payload;

    if (create && create.length > 0) {
        const doctorTimeSlot = await DoctorTimeSlot.findOne({ day: create[0].day });
        if (!doctorTimeSlot) {
            throw new Error('Time Slot is not found !!');
        }
        await ScheduleDay.create(create);
    }

    if (timeSlot && timeSlot.length > 0) {
        for (const item of timeSlot) {
            const { doctorTimeSlotId, ...others } = item;
            await ScheduleDay.findByIdAndUpdate(others.id, { startTime: others.startTime, endTime: others.endTime });
        }
    }
    return { message: 'Successfully Updated' };
};

const getAppointmentTimeOfEachDoctor = async (id, filter) => {
    const doctorTimeSlot = await DoctorTimeSlot.find({ doctorId: id }).populate('timeSlot');
    const allSlots = doctorTimeSlot.map((item) => {
        const { day, timeSlot } = item;
        return { day, timeSlot };
    });

    const generateTimeSlot = (timeSlot) => {
        const selectedTime = [];
        timeSlot.forEach((item) => {
            const interval = 30;
            const newTimeSlots = [];
            const day = item.day;

            item.timeSlot.forEach((slot) => {
                const { startTime, endTime } = slot;
                let startDate = moment(startTime, 'hh:mm a');
                const endDate = moment(endTime, 'hh:mm a');

                while (startDate < endDate) {
                    const selectableTime = { id: newTimeSlots.length + 1, time: startDate.format('hh:mm a') };
                    newTimeSlots.push({ day, slot: selectableTime });
                    startDate = startDate.add(interval, 'minutes');
                }
            });
            if (filter.day) {
                const newTime = newTimeSlots.filter((item) => item.day === filter.day);
                selectedTime.push(newTime);
            }
        });
        return selectedTime.flat();
    };

    const result = generateTimeSlot(allSlots);
    return result;
};

module.exports = {
    createTimeSlot,
    deleteTimeSlot,
    getTimeSlot,
    getMyTimeSlot,
    getAllTimeSlot,
    updateTimeSlot,
    getAppointmentTimeOfEachDoctor
};