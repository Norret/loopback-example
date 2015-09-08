module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        //src: 'src/<%= pkg.name %>.js',
        //dest: 'build/<%= pkg.name %>.min.js'
	files: [{
		expand: true,
		cwd: 'src/js',
		src: '**/*.js',
		dest: 'build/js',
	}]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify'], function() {
	grunt.task.run('uglify');

	grunt.log.writeln('foo');
  });

};
