const jwt = require('jsonwebtoken');
const db = require('../firebase');

exports.signup = function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    if(!email||!password) {
        return res.status(422).send({Error: 'Email and/or password is rquired'});
    }

    var sameEmail = false;
    db.collection('users').get()
    .then((querySnapshot) => {
        var forEachCounter = 0;
        querySnapshot.forEach((doc) => {
            forEachCounter++;
            if(email===doc.data().email){
                console.log('if');
                sameEmail= true;
                return res.send({"Error": "Email is already in use"});
            }
            else{
                if(forEachCounter === querySnapshot.size && sameEmail != true) {
                    db.collection('users').add({
                        email,
                        password
                    })
                    .then(() => res.json())
                    .catch(err => res.send(err));
                }
            }
        })
    })
    .catch(err => res.send({"Error": err}))
}