import mongoose from "mongoose";

const initMongoose = () => {
  // mongoose.connect(
  //   'mongodb://localhost:27017/',
  //   {},
  //   (connectErr) => {
  //     mongoose.disconnect()
  //   });
  mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/multea");


  return mongoose;
};

export default initMongoose;
