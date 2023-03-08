const { urlencoded } = require("express");
const express = require("express");
const app = express();
const path = require('path');
const port = 80;
const hostname = '127.0.0.1';
const fs = require('fs') ;
//serving the static
app.use('/static' , express.static('static')) ;
app.use(express.urlencoded()) ;

//set the template engine
app.set('view engine' , 'pug') ;
app.set('views' , path.join(__dirname , 'views'))

//demo endpoint setup 
app.get('/demo' ,(req,res) => {
    res.status(200).render('demo' , {title : 'hey Mehak' , message :'What is yup guys!!!'})
})

app.get('/index' , (req,res) => {
    const con = "THIS IS THE BEST PAGE YOU HAVE EVER SEEN" ;
    const params = {'title' : 'how you doin !!' , 'content' : con } ;
    res.render('index.pug' , params) ;
})

app.post('/result' , (req , res) => {
    // console.log(req.body) ;
    name = req.body.name ;
    age = req.body.age; 
    gender = req.body.gender ;
    address = req.body.address;
    more = req.body.more ;
    let outputtowrite = `the name of client is ${name} , ${age} is age , ${gender} is gender , ${address} is address. More about him/her ${more}`
    fs.writeFileSync('output.txt' , outputtowrite)
    const params = {'title':'Finally!!' , 'message' : 'Your form have been submitted successfully' } ;
    res.render('results.pug' , params) ;
})
// app.get("/" ,(req,res) => {
//     res.sendFile(path.join(__dirname , 'src/index.html')) ;
// })

// app.get("/about",(req,res) => {
//     res.sendFile(path.join(__dirname,"src/about.html")) ;
// })
app.listen(port, ()=>{
    console.log(`The application started successfully on port http://${hostname}:${port}`);
});