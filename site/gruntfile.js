module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourceMap: true
        },
        files: {
          'css/build.css': '_sass/build.scss'
        }
      }
    },

    svgstore: {
      options: {
        prefix : 'icon-',
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
      css: {
        files: ["_site/css/**/*.css"],
        tasks: ["shell:jekyllBuild"]
      },
      svg: {
        files: ["_svg/**/*.svg"],
        tasks: ["svgstore"]
      },
      site: {
        files: [
          "_includes/**/*.html",
          "_layouts/**/*.html",
          "_sass/**/*.scss",
          "page/**/*.md",
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
