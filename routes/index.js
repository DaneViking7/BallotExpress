module.exports = function(app) {
  app.route('/dash').get(function (req, res) {
    res.render('dashboard', { title: 'Dashboard' });
  });
};