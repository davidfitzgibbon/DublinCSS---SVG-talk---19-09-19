# grunt-listfiles

[![NPM version](https://badge.fury.io/js/grunt-listfiles.png)](http://badge.fury.io/js/grunt-listfiles) [![Build Status](https://travis-ci.org/psyrendust/grunt-listfiles.png?branch=master)](https://travis-ci.org/psyrendust/grunt-listfiles)
[![Dependency Status](https://david-dm.org/psyrendust/grunt-listfiles.svg)](https://david-dm.org/psyrendust/grunt-listfiles) [![devDependency Status](https://david-dm.org/psyrendust/grunt-listfiles/dev-status.svg)](https://david-dm.org/psyrendust/grunt-listfiles#info=devDependencies)
[![Build status](https://ci.appveyor.com/api/projects/status/k1ac575ta94xu7y0/branch/master?svg=true)](https://ci.appveyor.com/project/psyrendust/grunt-listfiles/branch/master)

> Create a list of files and perform an action on each file in the list then write the results to a file.


## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-listfiles --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-listfiles');
```

*This plugin was designed to work with Grunt 0.4.x.*


## Listfiles task
_Run this task with the `grunt listfiles` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### banner
Type: `String`  
Default: `null`

Prefix the destination file with the given banner, with a linebreak inbetween.

#### footer
Type: `String`  
Default: `null`

Postfix the destination file with the given footer, with a prepended linebreak.

#### eol
Type: `String`  
Choices: `'lf'`, `'cr'`, `'crlf'`  
Default: `'lf'`

The linefeed character you would like to use for the destination file.

#### prefix
Type: `String`  
Default: `null`

A prefix string to prepend to each file that is found.

#### postfix
Type: `String`  
Default: `null`

A postfix string to append to each file that is found.

#### postfixLastLine
Type: `String`  
Default: `null`

A postfix string to append to the last file that is found.


#### replacements
Type: `Array`  
Default: `[]`

This option will hold all your pattern/replacement pairs. A pattern/replacement pair should contain key:value pairs containing:

* pattern `String` or `Regex`
* replacement `String` or `Function`

```javascript
options: {
  replacements: [{
    pattern: /\/(asdf|qwer)\//ig,
    replacement: '"$1"'
  }, {
    pattern: ',',
    replacement: ';'
  }, {
    pattern: /(file)(_)([\S]*?)(_)(test)/gi,
    replacement: function (match, p1, p2, p3, p4, p5, offset, string) {
      return [p1, p3, p5].join('-');
    }
  }]
}
```

###### Note

If specifying a function as a parameter for the replacemnt please see the documentation at [https://developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) for more details.
If the pattern is a string, only the first occurrence will be replaced, as stated on [String.prototype.replace](http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.11).

###### Note

All results will be alpha sorted after all replacements have occurred.

### Usage Examples

#### Example Config

```javascript
grunt.initConfig({
  listfiles: {
    options: {
      banner: '/**\n' +
              ' * list files banner\n' +
              ' */\n' +
              '{\n' +
              '\t[',
      footer: '\t]\n' +
              '}',
      eol: 'crlf',
      prefix: '\t\t\'',
      postfix: '\',',
      postfixLastLine: '\''
    },
    test1: {
      files: {
        'tmp/output.txt': [
          'test/fixtures/**/*.*',
          '!test/fixtures/{,*/,**/}*.{scss,html,md,rb}',
          '!test/fixtures/{,*/,**/}LICENSE'
        ]
      }
    }
  }
});

grunt.loadNpmTasks('grunt-listfiles');

grunt.registerTask('default', ['listfiles']);
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
See [CHANGELOG.md](https://github.com/psyrendust/grunt-listfiles/blob/master/CHANGELOG.md).
