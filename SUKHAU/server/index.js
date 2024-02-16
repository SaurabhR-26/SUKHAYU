const router = require("./routes");
// app create
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const cors = require("cors");
// const {cloudinaryConnect}=require("./config/cloudinary")
const fileUpload = require("express-fileupload");
require("dotenv").config();
const port = 4000;
app.use(
  cors({  
    origin: "*",
    credentials: true,
  })
);
const { database } = require("./utils/database");
database();

//middlewere add
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,  
    tempFileDir: "/tmp/",
  })
);

//db connect 

//cloud connect
// cloudinaryConnect();

app.use("/api/v1", router);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "your server is activated",
  });
});
//activate server
app.listen(port, () => {
  console.log(`your server is activated at port ${port}`);
});
