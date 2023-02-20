const {readJSON, writeJSON} = require('../data/index')

module.exports ={
    //creo los metodos que voy a utilizar en la ruta products.js
    addOneImage : (req,res)=>{
       return res.render('addOneImage')
    },
    storeOneImage : (req,res) =>{
        const products = readJSON('productsOneImage.json');

        const newProduct ={
            id : products.length ? products[products.length -1].id +1 : 1,
            name : req.body.name,
            description : req.body.description,
            //pregunto si existe la imagen, antes de requerirlo 
            //la subida de una sola imagen(single) imagen viene por file
            image : req.file ? req.file.filename : null
        }

        products.push(newProduct);
        writeJSON('productsOneImage.json', products)
        return res.redirect('/')
    },
    detailOneImage : (req,res)=>{
        const products = readJSON('productsOneImage.json');
        const product = products.find(product => product.id === +req.params.id)
        return res.render('detailOneImage',{
            ...product
        })
    },
    addMultipleImages : (req,res)=>{
        return res.render('addMultipleImages')
    },
    storeMultipleImages : (req,res) =>{
        const products = readJSON('productsMultipleImages.json');
        const newProduct ={
            id : products.length ? products[products.length -1].id +1 : 1,
            name : req.body.name,
            description : req.body.description,
            //pregunto si existe la imagen, antes de requerirlo
            //la subida de imagenes multiples viene por files 
            //saco la validacion porque si no viene ningun elemento guarda el array vacio
            images : req.files.map(file=>file.filename)
        };
        //pusheo el nuevo producto al array products
        products.push(newProduct);
        //Lo guardo, sobreescribiendo el archivo json y envio los datos de products
        writeJSON('productsMultipleImages.json',products)
        //redirijo al home
        return res.redirect('/')
    },
    detailMultipleImages : (req,res)=>{
        const products = readJSON('productsmultipleImages.json');
        const product = products.find(product => product.id === +req.params.id)
        res.render('detailMultipleImages',{
            ...product
        })
    },
    addMainImage :(req,res)=>{
        return res.render('addMainImage')
    },
    storeMainImage : (req,res) =>{
        return req.send(req.body)
    },
    detailMainImage : (req,res)=>{
        return res.render('detailMainImage')
    }
        
}