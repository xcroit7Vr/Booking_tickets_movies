const config = require('../library/db');
let mysql      = require('mysql');
let pool       = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    formRegister(req,res){
        res.render("register",{
            url : 'http://localhost:3000/',
        });
    },
    saveRegister(req,res){
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let password = req.body.pass;
        let phone = req.body.phone;
        if (firstname && lastname && email && password && phone) {
            pool.getConnection(function(err, connection) {
                if (err) throw err;
                connection.query(
                    `INSERT INTO tbl_users (firstname,lastname,email,password,phone) VALUES (?,?,?,?,SHA2(?,512));`
                , [firstname, lastname, email, password, phone, password],function (error, results) {
                    if (error) throw error;
                    req.flash('color', 'success');
                    req.flash('status', 'Yes..');
                    req.flash('message', 'Registrasi berhasil');
                    res.redirect('/login');
                });
                connection.release();
            })
        } else {
            res.redirect('/login');
            res.end();
        }
    }
}