const mongoose = require('mongoose');
const Account = require('./account')
let MONGO_DB_ACCOUNT_PW = 'hSk-3mXtyh5a$MB';
let MONGO_DB_USER_PW = 'PmSXHjjf4OH127kN';
class DataAccessObject {


    constructor() {
        try {
            mongoose.connect('mongodb+srv://kroma55:PmSXHjjf4OH127kN@cluster0-cqnkl.gcp.mongodb.net/test?retryWrites=true&w=majority')
        } catch (err) {
            console.log(err);
        }

    }
    create(req) {
        const account = new Account
            ({
                _id: new mongoose.Types.ObjectId(),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                zipCode: req.body.zipCode,
                password: req.body.password

            });

        return account.save();
    }
    search(req) {
        var query = Account.where({ email: req.body.email }).where({ password: req.body.password });
        return query.find(function (err, account) {
            if (err) return handleError(err);
            if (account) {
                return account;
            }
        });
    }



    read() {

    }

    update() {

    }

    delete() {

    }
}

module.exports = DataAccessObject;