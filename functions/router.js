const Authentication = require('./controllers');

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.send({"message": "Server is up"});
    })

    app.post('/signup', Authentication.signup);
    app.post('/signin', Authentication.signin);
}