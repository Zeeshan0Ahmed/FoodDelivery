const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes/foodRoutes");
const { default: userRouter } = require("./routes/userRoutes");
const dotenv = require("dotenv");
const cartRouter = require("./routes/cartRoutes");
const orderRouter = require("./routes/orderRoute");
const app = express();

const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

connectDB();
// api endpoint

app.use("/api/food", router);

app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started ${port}`);
});
