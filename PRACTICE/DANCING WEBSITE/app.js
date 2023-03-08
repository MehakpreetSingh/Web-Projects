const express = require(
    'express' 
);
const path = require('path') ;
const port = 80;

//EXPRESS SPECIFIC STUFF
const app = express() ;
app.use(express.urlencoded()) ;
app.use('/static',express.static('static'))

//PUG SPECIFIC STUFF
app.set('view engine' , 'pug') ;
app.set('views' , path.join(__dirname , 'views'))

app.get('/' , (req ,res) => {
    res.status(200).render('index.pug')
})

app.listen(port , (req ,res) => {
    console.log(`The application started running on the port ${port}`) ;
})