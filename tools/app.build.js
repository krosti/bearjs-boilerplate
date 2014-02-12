({
    // application directory root
    appDir: '../www',

    // relative to appDir property
    baseUrl: 'app',

    // output directory
    dir: '../www-built',

    // optimizer start using this file as root
    modules: [{
      name: 'config'
    }],

    // exclude css optimizations this will be handle by less
    optimizeCss: 'none',

    // exclude this list of files/directory names
    fileExclusionRegExp: /^node_modules|package.json|readme.md|README.md|.git*|server.js|Gruntfile.js|test|docs/,

    mainConfigFile: 'config.js'

})