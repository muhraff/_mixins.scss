let elixir = require('laravel-elixir'); // Require Elixier

// Terminal Commands
// To run all tasks one time: gulp
// To have Gulp run when it detects changes in relevant files: gulp watch
// To have Gulp compress/minify your output for production: gulp --production

// Task #1: Using Sass's @import syntax, Elixir will compile your imports into a single file before compress. Don't forget that all paths are relative to your assetsPath configuration above.
elixir(function(mix) {
    mix.sass('./app.scss', 'css/app.css');
});

