const passport = require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const db = require('../firebase');
const decrypt = require('../crypt/decrypt');
const config = require('../config').configKey;

const localOptions = {
    usernameField: 'email'
}

const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    if(!email||!password) {
        return done({Error: "The username and password you entered did not match. Try again"}, false);
    }

    var forEachCounter = 0;
    var sameEmail = false;

    db.collection('users').get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            forEachCounter++;
            const docEmail = doc.data().email;
            const docPassword = doc.data().password;
            if(email===docEmail){
                sameEmail = true;
                if(decrypt(password, docPassword)===true){
                    return done(null, email)
                }
                else {
                    return done({Error: "The username and password you entered did not match. Try again"}, false);
                }
            }
            else {
                if(forEachCounter === querySnapshot.size && sameEmail !== true){
                    return done({Error: "The username and password you entered did not match. Try again"}, false);
                }
            }
        })
    })
    .catch(err => done({"Error": err}, false))
})

passport.use(localLogin);