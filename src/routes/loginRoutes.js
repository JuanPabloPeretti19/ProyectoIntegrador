let express= require("express")
let router= express.Router()
const loginControllers= require('../controllers/loginController')


router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));
  });

  module.exports= router