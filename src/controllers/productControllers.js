let products= [
    {
        nombre:"Bolsas",
        descripcion:"",
        precio:47.00,
        id:1
        },
    
    {
    nombre:"Cartoneria",
    descripcion:"",
    precio:47.00,
    id:2
    },
{
    nombre:"Papeles",
      descripcion:"",
      precio:27.5,
      id:3
},
    {       
nombre:"Servilletas",
descripcion:"",
 precio:37.50,
        id:1
    },
    
    ]

let productControllers= {
    index:function (req,res){
      res.render(path.join(__dirname, "./views/home.ejs"), {products:products})
},
detail:function (req,res){
    let id= req.params.id
    let product= products.find(product=>product.id == id)
        res.sendFile(path.join(__dirname, "./views/productDetail.ejs"), {product:product});
      
},
edit:function (req,res){
    let id= req.params.id
    let product= products.find(product=>product.id == id)
        res.sendFile(path.join(__dirname, "./views/edit.ejs"), {product:product})
},

/*Para pasarle contenido a nuestra vista necesitamos el formato objeto, (clave y valor)
El primer parametro recibe la vista
Referencia al array que tenemos declarado(frutasArr)
*/

detalle: function(req,res){
    let detalleProducto=producto.find(producto=>producto.id==req.params.id)
    if(detalleProducto == undefined){
    res.render("No se encontró el menú")
  }else {
    res.render('productDetail', {detalle:detalleProducto})
  }
    res.render('index',{detalle:detalleProducto})
}
}

module.exports= productControllers
