module.exports = function(app) {

  app.get('/jedi/:firstname/:lastname', function(req, res) {

    var firstName = req.params.firstname;
    var lastName = req.params.lastname;

    var firstThree = function(name) {

      return name.slice(0, 3);
    }

    res.json({
      message: 'Hello ' + firstThree(firstName) + firstThree(lastName)
    });
  });

};
