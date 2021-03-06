const jwt = require('jsonwebtoken');
const db = require('../firebase');
const encrypt = require('../crypt/encrypt');
const decrypt = require('../crypt/decrypt');
const config = require('../config').configKey;

function tokenForUser (id) {
    const timestamp = new Date().getTime();
    return jwt.sign({sub: id, iat: timestamp}, config)
}

exports.login = function(req, res, next) {
    res.send({token: tokenForUser( req.user )})
}

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
                sameEmail=true;
                return res.status(409).send({"Error": "Email is already in use"});
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

// exports.login = function(req, res, next){
//     const email = req.body.email;
//     const password = req.body.password;
    
//     if(!email||!password) {
//         return res.status(401).send({Error: "The username and password you entered did not match. Try again"});
//     }

//     var forEachCounter = 0;
//     var sameEmail = false;

//     db.collection('users').get()
//     .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             forEachCounter++;
//             const docEmail = doc.data().email;
//             const docPassword = doc.data().password;
//             if(email===docEmail){
//                 sameEmail = true;
//                 if(decrypt(password, docPassword)===true){
//                     return res.send({ token: tokenForUser(doc.id) })
//                 }
//                 else {
//                     return res.status(401).send({Error: "The username and password you entered did not match. Try again"});
//                 }
//             }
//             else {
//                 if(forEachCounter === querySnapshot.size && sameEmail !== true){
//                     return res.status(401).send({Error: "The username and password you entered did not match. Try again"});
//                 }
//             }
//         })
//     })
//     .catch(err => res.send({"Error": err}))

// }