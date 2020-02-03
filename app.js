const express = require('express');
const app = express();
var uid = require('uid-safe');
app.get( '/new-password/:user',(req,res) => {


res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.statusMessage ='TODO BIEN CHICO';
const a = req.query.id || null;

 return  /* res.status(status).json({idUser: uid.sync(18)}) */ res.send(
    `PUT HTTP method on user/${req.params.user} /${req.query.name} ${req.query.surname}   resource`,
 );

});


app.listen(3000);
