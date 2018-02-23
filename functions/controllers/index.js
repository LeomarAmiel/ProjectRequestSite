const jwt = require('jsonwebtoken');
const db = require('../firebase');

exports.signup = function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    // if(!email||!password) {
    //     return res.status(422).send({Error: 'Email and/or password is rquired'});
    // }
    // Will fetch list of users for front-end checking of email in form
    // Adding server-checking for now
    db.collection('users').get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(email!==doc.data().email){
                db.collection('users').add({
                    email,
                    password
                })
            }
        })
    })
    next();
}