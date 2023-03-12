const express = require('express')
const products_routes = require('./routes/products.js')
const slugify = require('slugify')
//Server instantiation
const app = express()

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

//Midleware
app.use(express.json())
app.use('/', products_routes)

//TAREA 7
const dotenv= requiere("dotenv");
dotenv.config();
module.exports={
    mongoURI: process.env.MONGO_URL
};

//Server startup
app.listen(5000, () => {
    // console.log('server is listening on port 5000');
    const arteriscosMSJ = slugify('server is listening on port 5000',{replacement: '*', lower: true });
    console.log(arteriscosMSJ);
})


