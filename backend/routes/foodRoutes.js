const express = require("express");
const multer = require("multer");
const {
  addFood,
  listFood,
  removeFood,
} = require("../controller/foodController");
const router = express.Router();

// Image Storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
router.post("/add", upload.single("image"), addFood);
router.get("/list", listFood);
router.delete("/remove", removeFood);
module.exports = router;
