const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://admin:Allahisgreatest@cluster0.vo5mezc.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("DB Connected");
    })
    .catch(() => {
      console.log("something went wrong");
    });
};
module.exports = connectDB;
