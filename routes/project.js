var models = require('../models');

exports.projectInfo = function(req, res) { 
	var projectID = req.params.id;

  // query for the specific project here
  // send a response using res.json(...);
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
}