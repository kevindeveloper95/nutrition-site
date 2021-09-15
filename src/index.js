const { dir } = require('console')
const express = require('express')
const app = express()
const path = require('path')

//plantillas
let ejs = require('ejs');
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

//settings
app.set('port', 4000)

//static
app.use(express.static(__dirname + '/public'));

//routes
app.use(require('./routes/routesweb'))

//listen the server
app.listen(app.get('port'), () =>{
    console.log('servidor', app.get('port'))
})