(function() {
	'use strict';
	var gulp 		= require("gulp"),
		sass 		= require("gulp-ruby-sass"),
		server 		= require("gulp-develop-server"),
		browserify 	= require('gulp-browserify');

	gulp.task("default", function(){
		console.log("starting");
	});

	// sass compiler
	gulp.task("compile:css", function(){
		gulp.src("app/styles/*.scss")
		.pipe(sass())
		.on("error", function (err) {console.log(err.message);})
		.pipe(gulp.dest("app/styles"));
	});
	// Browserify
	gulp.task('scripts', function() {
	    // Single entry point to browserify 
	    gulp.src('app/scripts/main.js')
	        .pipe(browserify({
	          insertGlobals : true,
	          debug : !gulp.env.production
	        }))
	        .pipe(gulp.dest('app'));
	});

	// Server start
	gulp.task("server:start", function() {
	    server.listen({path: 'main.js'});
	});
	// Server kill
	gulp.task("server:restart", function() {
		server.restart();
	});

	// WATCH
	// =====
	gulp.task("watch", ["server:start", "scripts"], function(){
		gulp.watch(["app/styles/*.scss"], ["compile:css"]);
		gulp.watch(["main.js", "routes/**/*.js"], ["server:restart"]);
		gulp.watch(["app/scripts/**/*.js"], ["scripts"]);
	});
})();
