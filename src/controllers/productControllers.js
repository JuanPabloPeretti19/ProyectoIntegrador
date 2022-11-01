
//Acá van todos los productos que queremos mostrar, se pueden poner con más detalle en descripción(tamaño,formato,linea,etc)
//Hay que revisar los nombres de productos, con los de home.ejs, si coinciden o no. 
let productos= [
    {
        nombre:"Bolsas",
        descripcion:"",
        precio:500.00,
        imagen:bolsas.jpeg,
        id:1
        },
    
    {
    nombre:"Cartoneria",
    descripcion:"",
    precio:47.00,
    imagen:cartoneria.jpg,
    id:2
    },
{
    nombre:"Papeles",
      descripcion:"",
      precio:27.5,
      imagen:papeles.jpeg,
      id:3
},
    {       
nombre:"Servilletas",
descripcion:"",
 precio:37.50,
 imagen: servilletas.jpeg,
        id:1
    },
    
    ]

    //Revisar los nombres dados a las variables y si va productos.find de detail, detalle y edit
let productControllers= {
    index:function (req,res){
      res.render(path.join(__dirname, "./views/home.ejs"), {productos:productos})
},
detail:function (req,res){
    let id= req.params.id
    let product= productos.find(productos=>productos.id == id)
        res.sendFile(path.join(__dirname, "./views/productDetail.ejs"), {productos:productos});
      
},
edit:function (req,res){
    let id= req.params.id
    let product= productos.find(product=>product.id == id)
        res.sendFile(path.join(__dirname, "./views/edit.ejs"), {productos:productos})
},

/*Para pasarle contenido a nuestra vista necesitamos el formato objeto, (clave y valor)
El primer parametro recibe la vista

*/

//Prueba realizada para comparar con detail de más arriba.
detalle: function(req,res){
    let detalleProducto=producto.find(producto=>producto.id==req.params.id)
    if(detalleProducto == undefined){
    res.render("No se encontró el producto")
  }else {
    res.render('productDetail', {detalle:detalleProducto})
  }
    res.render('index',{detalle:detalleProducto})
}
}

module.exports= productControllers
