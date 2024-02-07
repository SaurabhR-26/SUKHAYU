const mongoose = require('mongoose');
// Define the pick function
const pick = (obj, keys) => {
    const finalObj = {};

    for (const key of keys) {
        if (obj && Object.hasOwnProperty.call(obj, key)) {
            finalObj[key] = obj[key];
        }
    }
    return finalObj;
};

// Export the pick function
module.exports = pick;