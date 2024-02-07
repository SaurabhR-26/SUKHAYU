const { Schema, model } = require("mongoose");
const { BloodGroup } = require("../../../constants");

const AdminSchema = new Schema({
    name: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        }
    },
    address: {
        type: String,
    },
    bloodGroup: {
        type: String,
        enum: BloodGroup
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    }
});

module.exports = {
    AdminModel: model('Admin', AdminSchema)
};
