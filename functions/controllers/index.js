const jwt = require('jsonwebtoken');
const db = require('../firebase');
const encrypt = require('../encrypt');

exports.signup = function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    if(!email||!password) {
        return res.status(422).send({Error: 'Email and/or password is rquired'});
    }
    
    var forEachCounter = 0;
    var sameEmail = false;

    db.collection('users').get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            forEachCounter++;
            if(email===doc.data().email){
                sameEmail= true;
                return res.send({"Error": "Email is already in use"});
            }
            else{
                if(forEachCounter === querySnapshot.size && sameEmail != true) {
                    const newPassword = encrypt(password);
                    db.collection('users').add({
                        email,
                        password: newPassword
                    })
                    .then(() => {
                        res.json({"Message": "User has been saved"});
                    })
                    .catch(err => {
                        res.send(err);
                    });
                }
            }
        })
    })
    .catch(err => res.send({"Error": err}))
}