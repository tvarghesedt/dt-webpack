module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uncss: {
  dist: {options: {
      ignore: [/\.drop_down/,/\.qode_carousels/,/pp_/,/trustpilot/,/employees/,/human/,/\.caroufredsel/,'div.ppt',/#back_to_top/,'#back_to_top.on']
    },
    files: {
      'wp-content/themes/bridge-child/tidy.css': ['index.html']
    }
  }
  },
    cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
   files: [{
      expand: true,
      cwd: 'wp-content/themes/bridge-child',
      src: ['*.css', '!*.min.css'],
      dest: 'wp-content/themes/bridge-child',
      ext: '.min.css'
    }]
  }
}
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-uncss');

  // Default task(s).
  //grunt.registerTask('default', ['cssmin','uglify']);
  grunt.registerTask('default', ['uncss']);

};