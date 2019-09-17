module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    svgstore: {
      options: {
        svg: {
          "xmlns": "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "style": "display: none"
        },
        cleanup: false
      },
      default: {
        files: {
          "svg/sprite.svg":
          ["_svg/*.svg"]
        }
      }
    },

    shell: {
      jekyllServe: {
        command: "bundle exec jekyll s"
      },
      jekyllBuild: {
        command: "bundle exec jekyll b"
      }
    },

    watch: {
      svg: {
        files: ["_svg/**/*.svg"],
        tasks: ["svgstore","shell:jekyllBuild"]
      },
      site: {
        files: [
          "_layouts/**/*.html",
          "css/**/*.css",
          "page/**/*.html",
          "index.md"
        ],
        tasks: ["shell:jekyllBuild"]
      },
    }
  });

  // compiles your sass
  grunt.loadNpmTasks('grunt-contrib-sass');
  // allows file watching
  grunt.loadNpmTasks('grunt-contrib-watch');
  // compiles the SVG sprite
  grunt.loadNpmTasks('grunt-svgstore');
  // lets us run shell commands from grunt, for jekyll builds
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jshint']);
};
