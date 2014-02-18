var models = require('../models');

exports.projectInfo = function(req, res) { 
	var projectID = req.params.id;

  models.Project
    .find({ '_id': projectID })
    .exec(respondWithProject);

  function respondWithProject(err, project) {
    res.json(project[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);
  form_data.title = form_data.project_title;

  var new_proj = new models.Project(form_data);
  new_proj.save(function(err) {
    if(err) console.log(err);
    res.send();
  });
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  console.log('deleting '+projectID);
  models.Project
    .find({ '_id': projectID })
    .remove()
    .exec(onceRemoved);

  function onceRemoved(err) {
    if(err) console.log(err);
    res.send();
  }
}