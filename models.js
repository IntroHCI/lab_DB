
var Mongoose = require('mongoose');

var projects_json = require('./projects.json');


var ProjectSchema = new Mongoose.Schema({
  //"id": Number,
  "title": String,
  "date": String,
  "summary": String,
  "image": String
});

exports.Project = Mongoose.model('Project', ProjectSchema);


// In order to reset your database, set the variable below:
// RESET_THE_DATABASE = true
// When RESET_THE_DATABASE is true, the contents of the database
// will be built from scratch everytime the application is started.
// Once the variable is turned off, the contents of the database
// will remain as they were.
exports.init = function() {
  var RESET_THE_DATABASE = false;

  if(RESET_THE_DATABASE) {
    exports.Project.find().remove().exec(initializeProjects);
  } else {
    initializeProjects();
  }

  function initializeProjects() {
    //exports.Project.find().remove().exec();
    exports.Project.find(function(err, projects) {
      if(!projects || projects.length === 0) {
        console.log('No projects found.  Initializing the Projects.');
        for(var i=0; i<projects_json.length; i++) {
          var json = projects_json[i];
          var proj = new exports.Project(json);
          proj.save(function(err, proj) {
            if(err) {
              console.log(err);
            }
          });
        }
      }
    });
  }
}
