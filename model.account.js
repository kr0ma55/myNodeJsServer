var uid = require('uid-safe')
class Account {


    constructor(firstName, lastName, email, zipCode, password) {
        this.uid = uid.sync(18);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email || undefined;
        this.zipCode = zipCode || undefined;
        this.password = password || undefined;
    }

    checkAccountValidity() {
        let validParameters = true;
        for (let i in this) {
            if (this[i] === undefined) {
                validParameters = false;
                return validParameters;
            }
        }
        return validParameters;

    }




}


/* module.exports = Account; */