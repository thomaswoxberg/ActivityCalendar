var gulp = require("gulp");
var rename = require("gulp-rename"); 

gulp.task("copy-dependencies", function() {
    gulp.src([
            "node_modules/@angular/common/bundles/common.umd.min.js", 
            "node_modules/@angular/compiler/bundles/compiler.umd.min.js", 
            "node_modules/@angular/core/bundles/core.umd.min.js", 
            "node_modules/@angular/forms/bundles/forms.umd.min.js", 
            "node_modules/@angular/http/bundles/http.umd.min.js", 
            "node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js", 
            "node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js", 
            "node_modules/@angular/router/bundles/router.umd.min.js", 
            "node_modules/@angular/router-deprecated/bundles/router-deprecated.umd.min.js", 
            "node_modules/@angular/upgrade/bundles/upgrade.umd.min.js", 
            "node_modules/zone.js/dist/zone.js", 
            "node_modules/reflect-metadata/Reflect.js", 
            "node_modules/systemjs/dist/system.src.js", 
            "node_modules/moment/min/moment.min.js", 
            "node_modules/jquery/dist/jquery.min.js", 
            "node_modules/fullcalendar/dist/fullcalendar.min.js", 
            "node_modules/qtip2/dist/jquery.qtip.min.js"])
    .pipe(rename(function(path) {
        path.basename = path.basename.replace("-", "_"); 
    }))          
    .pipe(gulp.dest("dist/dependencies"))
    .pipe(gulp.dest("dependencies"));   

    gulp.src([
        "node_modules/rxjs/bundles/Rx.js", 
        "node_modules/rxjs/Observable.js"
    ])
    .pipe(gulp.dest("dist/dependencies/rxjs"))
    .pipe(gulp.dest("dependencies/rxjs")); 
/*
     gulp.src([
        "node_modules/rxjs/util/*.js",
    ])
    .pipe(gulp.dest("dist/dependencies/rxjs/util"))
    .pipe(gulp.dest("dependencies/rxjs/util")); 

    gulp.src([
        "node_modules/rxjs/symbol/*.js", 
    ])
    .pipe(gulp.dest("dist/dependencies/rxjs/symbol"))
    .pipe(gulp.dest("dependencies/rxjs/symbol")); 

    gulp.src([
        "node_modules/rxjs/add/observable/*.js", 
    ])
    .pipe(gulp.dest("dist/dependencies/rxjs/add/observable"))
    .pipe(gulp.dest("dependencies/rxjs/add/observable")); 

    gulp.src([
        "node_modules/rxjs/add/operator/*.js", 
    ])
    .pipe(gulp.dest("dist/dependencies/rxjs/add/operator"))
    .pipe(gulp.dest("dependencies/rxjs/add/operator")); 
*/

}); 


gulp.task("copy-app", function() {
    gulp.src(["app/*.js", "index.html"])
    .pipe(gulp.dest("dist")); 
}); 

gulp.task("default", ["copy-dependencies", "copy-app"], function() {
    
});