const express= require("express");
const productControllers= require('../controllers/productController')

const router= express.Router();
router.get("/productDetail", (req, res) => {
    res.render(path.join(__dirname, "./views/productDetail.html"));
  });


router.get('/', productControllers.index);
router.get('/detail/:id', productControllers.detail)
router.get('/edit/:id', productControllers.edit)

module.exports= router