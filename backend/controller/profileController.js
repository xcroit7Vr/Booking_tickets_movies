const config = require('../library/db');

let mysql      = require('mysql');
let pool       = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    profile(req,res){
        let id = req.session.userid
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM tbl_users where id = '${id}';
                `
            , function (error, results) {
                if(error) throw error;
                res.render("profile",{
                    url: 'http://localhost:3000/',
                    userName: req.session.firstname,
                    nama: results[0]['username'],
                    email: results[0]['email']
                });
            });
            connection.release();
        })
    }
}