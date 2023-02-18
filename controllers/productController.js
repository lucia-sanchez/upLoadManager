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
            description : "lorem ipsum dolor amet sit",
            image : req.file ? req.file.filename : null
        }

        products.push(newProduct);
        writeJSON('productsOneImage.json', products)
        return res.redirect('/')
    },
    detailOneImage : (req,res)=>{
        return res.render('detailOneImage')
    }

}