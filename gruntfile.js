/*global module:false*/
module.exports = function (grunt) {
  grunt.initConfig({
    esri_slurp: {
      dev: {
        options: {
          version: '3.10',
          packageLocation: 'src/esri',
          beautify: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-esri-slurp');

  grunt.registerTask('slurp', ['esri_slurp:dev']);
};