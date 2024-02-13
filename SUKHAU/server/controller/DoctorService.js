const  mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Doctor =require( "../model/Doctor");
const Auth = require('../model/Auth');


async function createDoctor(payload) {
  try {
      const { password, ...othersData } = payload;
      const hashedPassword = await bcrypt.hash(password, 12);
      const doctor = new Doctor({ ...othersData });

      if (doctor) {
        const auth = await Auth.create({
            
                email: doctor.email,
                password:hashedPassword,
                role: 'doctor',
                userId: doctor.id
        
        });
        // return {
        //     doctor,
        //     auth,
        // };
    }
      const savedDoctor = await doctor.save();
      return savedDoctor;
  } catch (error) {
      throw new Error(error.message);
  }
}

async function getAllDoctors(filters, options) {
  try {
      const { limit, page } = options;
      const skip = (page - 1) * limit;
      const { searchTerm, max, min, specialist, ...filterData } = filters;

      const conditions = [];
      if (searchTerm) {
          conditions.push({
              $or: ['firstName', 'lastName', 'address', 'specialization', 'degree'].map((field) => ({
                  [field]: { $regex: searchTerm, $options: 'i' }
              }))
          });
      }

      if (Object.keys(filterData).length > 0) {
          conditions.push(filterData);
      }

      if (min || max) {
          conditions.push({ price: { $gte: min || 0, $lte: max || Infinity } });
      }

      if (specialist) {
          conditions.push({ services: { $regex: specialist, $options: 'i' } });
      }

      const whereCondition = conditions.length > 0 ? { $and: conditions } : {};
      const result = await Doctor.find(whereCondition).skip(skip).limit(limit);
      const total = await Doctor.countDocuments(whereCondition);

      return { meta: { page, limit, total }, data: result };
  } catch (error) {
      throw new Error(error.message);
  }
}

async function getDoctor(id) {
  try {
      return await Doctor.findById(id);
  } catch (error) {
      throw new Error(error.message);
  }
}

async function deleteDoctor(id) {
  try {
      const deletedDoctor = await Doctor.findByIdAndDelete(id);


      
      if (!deletedDoctor) {
          throw new Error('Doctor not found');
      }
      return deletedDoctor;
  } catch (error) {
      throw new Error(error.message);
  }
}

async function updateDoctor(id, payload) {
  try {
      const updatedDoctor = await Doctor.findByIdAndUpdate(id, payload, { new: true });
      if (!updatedDoctor) {
          throw new Error('Doctor not found');
      }
      return updatedDoctor;
  } catch (error) {
      throw new Error(error.message);
  }
}

// Export the Doctor model and DoctorService functions
module.exports= {  createDoctor, updateDoctor, deleteDoctor, getAllDoctors, getDoctor };
// export default DoctorService;



