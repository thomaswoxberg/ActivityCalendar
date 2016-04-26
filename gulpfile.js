var gulp = require("gulp");
var rename = require("gulp-rename"); 

gulp.task("copy-dependencies", function() {
    gulp.src([
              "node_modules/systemjs/dist/system-polyfills.js", 
              "node_modules/angular2/es6/dev/src/testing/shims_for_IE.js", 
              "node_modules/angular2/bundles/angular2-polyfills.js", 
              "node_modules/systemjs/dist/system.src.js", 
              "node_modules/rxjs/bundles/Rx.js", 
              "node_modules/angular2/bundles/angular2.dev.js", 
              "node_modules/angular2/bundles/http.dev.js", 
              "node_modules/angular2/bundles/router.dev.js", 
              "node_modules/moment/min/moment.min.js", 
              "node_modules/jquery/dist/jquery.min.js", 
              "node_modules/fullcalendar/dist/fullcalendar.min.js", 
              "node_modules/qtip2/dist/jquery.qtip.min.js"])
    .pipe(rename(function(path) {
        path.basename = path.basename.replace("-", "_"); 
    }))          
    .pipe(gulp.dest("dist/dependencies"))
    .pipe(gulp.dest("app/dependencies")); 
}); 


gulp.task("copy-app", function() {
    gulp.src(["app/*.js", "index.html"])
    .pipe(gulp.dest("dist")); 
}); 

gulp.task("default", ["copy-dependencies", "copy-app"], function() {
    
});