const { application } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const mainRoutes= require('./src/routes/mainRoutes')
const productRoutes= require('./src/routes/productRoutes')
const registerRoutes= require('./src/routes/registerRoutes')
const loginRoutes= require('./src/routes/logintRoutes')

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3032, () => console.log("servidor corriendo!"));


app.use('/', mainRoutes)
app.use('/productDetail', productRoutes)
app.use('/register', registerRoutes)
app.use('/login', loginRoutes)


app.set("view engine", "ejs")


