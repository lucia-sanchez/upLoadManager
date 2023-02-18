module.exports ={
    //creo los metodos que voy a utilizar en la ruta products.js
    addOneImage : (req,res)=>{
       return res.render('addOneImage')
    },
    storeOneImage : (req,res) =>{
        return res.send(req.body)
    },
    detailOneImage : (req,res)=>{
        return res.render('detailOneImage')
    }

}