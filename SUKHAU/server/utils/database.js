const mongoose = require("mongoose");
require("dotenv").config();

exports.database = () => {
    mongoose.connect("mongodb+srv://rahulrevanna11:gJY0uXaTOvkKq1vn@cluster0.3nwow0p.mongodb.net/SUKHAU", {
        
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connected Successfully")) 
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};