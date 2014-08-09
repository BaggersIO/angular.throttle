'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({
		copy: {
		  main: {
		    src: 'src/angular.throttle.js',
		    dest: 'dest/angular.throttle.js'
		  },
		},
	  uglify: {
	    my_target: {
	      files: {
	        'dest/angular.throttle.min.js': ['src/angular.throttle.js']
	      }
	    }
	  }
	});

	grunt.registerTask('build', [
		'copy',
		'uglify'
	])

};
