const express = require('express');
const app = express();
const PORT_NUMBER = 3000;
var cors = require('cors');
var uid = require('uid-safe');
var bodyParser = require('body-parser');
const DataAccessObject = require('./DataAccessObject')
var accountDao = new DataAccessObject();
const mongoose = require('mongoose');
/* const Account = require('./account') */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
try {
   mongoose.connect('mongodb+srv://kroma55:PmSXHjjf4OH127kN@cluster0-cqnkl.gcp.mongodb.net/test?retryWrites=true&w=majority')
} catch (err) {
   console.log(err);
}





app.get('/new-password/:id', (req, res) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.statusCode = 200;
   return res.status('200').json({ idUser: uid.sync(18) })

});
app.post('/new-account', (req, res) => {

   accountDao.search(req).then((accountToSaerch) => {

      if (accountToSaerch.length !== 0 ) {
         res.status(400).json({ error: 'Account just exists' })
      } else {
         accountDao.create(req)

            .then((account) => {
               res.status(200).json({ newAccountCreated: account })
            })
      }
   });
});

app.post('/search', (req, res) => {

   accountDao.search(req).then((account) => {

      res.status(200).json(account)
   });
});

app.get('/', function (req, res, next) {
   res.redirect('/');
});


app.listen(PORT_NUMBER);
console.log('New Server Listening on :' + PORT_NUMBER )

