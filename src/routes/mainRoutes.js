const express= require("express");
const mainControllers= require('../controllers/mainController')

const router= express.Router();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
  });
  

router.get('/', mainControllers.index);

module.exports= router