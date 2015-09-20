module.exports = function(app) {

  app.get('/jedi/:firstname/:lastname', function(req, res) {

    var firstName = req.params.firstname;
    var lastName = req.params.lastname;

    var firstN = function(name, n) {

      return name.slice(0, n);
    }

    res.json({
      message: 'Hello ' + firstN(lastName, 3) + firstN(firstName, 2)
    });
  });

};
