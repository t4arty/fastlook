'use strict';
var gulp = require('gulp')
var gls = require('gulp-live-server')

gulp.task('default', function() {
    var server = gls.static('main', 8080)
    server.start()

    gulp.watch(['main/**/*.html'], function(file) {
        server.notify.apply(server, [file]);
    });
});