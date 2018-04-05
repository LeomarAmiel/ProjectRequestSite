const Authentication = require('./controllers');
const passport = require('passport');
const passportService = require('./services/passport');

const requireJWT = passport.authenticate('jwt', { session: false });
const requireLocal = passport.authenticate('local', { session: false });

module.exports = function (app) {
    app.get('/', requireJWT, (req, res) => {
        res.send({"message": "Server is up"});
    })

    app.post('/signup', Authentication.signup);
    app.post('/login', requireLocal, Authentication.login);
}