const mongoose = require('mongoose');



mongoose
.connect('mongodb://localhost/mean-employees',{
    useUniFiedTopology:true,
    useNewUrlParser:true
})
.then((db)=>console.log('db conected'))
.catch((err)=>console.log(err))