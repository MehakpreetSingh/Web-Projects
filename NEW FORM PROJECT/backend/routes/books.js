const db = require('../db');
const express = require('express');
const router = express.Router();

router.get("/all", (req, res) => {
    // const query = fs.readFileSync("./sql/queries/all.sql").toString();
    const query = " select * from library.book;"
    db.connection.query(query, function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results);
        res.send(results);
    });
});

router.post("/add_book", (req, res) => {
    // const query = fs.readFileSync("./sql/queries/all.sql").toString();
    const query = " insert into library.book set id=?,title=?,category_id=?,publication_date=?,copies_owned=?;"
    db.connection.query(query, [req.body.id, req.body.title, req.body.category_id, req.body.publication_date, req.body.copies_owned],
         function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results);
        res.send(results);
    });
});

router.post("/add_member", (req, res) => {
    // const query = fs.readFileSync("./sql/queries/all.sql").toString();
    const query = " insert into library.member set id=?,first_name=?,last_name=?,joined_date=?,active_status_id=?;"
    db.connection.query(query, [req.body.id, 
        req.body.first_name, req.body.last_name, req.body.joined_date, req.body.active_status_id],
         function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results);
        res.send(results);
    });
});

router.post("/find_book_by_title",(req,res)=>{
    const query= "select * from library.book where title=? ;"
    db.connection.query(query, [req.body.title],
         function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results);
        res.send(results);
    });
})  

router.post("/find_book_by_author",(req,res)=>{
    const query= "select book.id , book.title , book.category_id , book.publication_date , book.copies_owned from book, book_author, author where author.first_name = ? and author.id= book_author.author_id and book_author.book_id = book.id ;"
    db.connection.query(query, [req.body.first_name],
         function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results);
        res.send(results);
    });
})

router.post("/find_book_by_year",(req,res)=>{
    const query= "SELECT * FROM book where YEAR(book.publication_date)=?;"
    db.connection.query(query, [req.body.year],
         function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results);
        res.send(results);
    });
})

router.post("/issue_book", (req, res) => {
    // const query = fs.readFileSync("./sql/queries/all.sql").toString();
    // const query = " insert into library.loan set id=?,first_name=?,last_name=?,joined_date=?,active_status_id=?;"

    var id=req.body.member_id;
    const query= "insert into library.loan set book_id=?,loan_date=?,returned_date=?, member_id=? ;"
    db.connection.query(query, [req.body.book_id,req.body.loan_date,req.body.returned_date,id],
         function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results);
        res.send(results);
    });
});

module.exports = router;
