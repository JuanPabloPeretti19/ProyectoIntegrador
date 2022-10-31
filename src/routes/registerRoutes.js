let express= require("express")
let router= express.Router()
const registerControllers= require('../controllers/registerController')


router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"));
  });

  module.exports= router