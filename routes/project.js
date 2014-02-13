var models = require('../models');

exports.projectInfo = function(req, res) { 
	var projectID = req.params.id;

  models.Project
    .find({ '_id': projectID })
    .exec(respondWithProject);

  function respondWithProject(err, project) {
    console.log(project[0]);
    res.json(project[0]);
  }
}

exports.addProject = function(req, res) {
  var post_data = req.body;
  console.log(post_data);

  var new_proj = new models.Project(post_data);
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