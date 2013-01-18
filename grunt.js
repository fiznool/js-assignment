// This is the main application configuration file.  It is a Grunt
// configuration file, which you can learn more about here:
// https://github.com/cowboy/grunt/blob/master/docs/configuring.md
module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      all: ["specrunner.html"]
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-task');

};
