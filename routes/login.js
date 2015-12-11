module.exports = function(app) {
  app.route('/login').get(function (req, res) {
    res.render('login', { title: 'Login' });
  });
};