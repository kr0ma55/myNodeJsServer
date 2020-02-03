const express = require('express');
const app = express();
var cors = require('cors');
var uid = require('uid-safe');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.get( '/new-password',(req,res) => {


res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.statusCode = 200;
/* const a = req.query.id || null; */

 return  res.status('200').json({idUser: uid.sync(18)})
    /* `PUT HTTP method on user/${req.params.user} /${req.query.name} ${req.query.surname}   resource` */
 

});
app.post( '/new-password',(req,res) => {


   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.statusMessage ='TODO BIEN CHICO';
   const a = req.body /* || null; */
   
   console.log(a);
      return res.json(a); 
   
   });


app.listen(3000);
