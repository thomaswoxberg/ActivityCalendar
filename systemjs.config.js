/**
 * System configuration for Angular 2 
 */
(function (global) {
  // map tells the System loader where to look for things
  var map = {
    '@angular/common' : 'dependencies',
    '@angular/compiler' : 'dependencies',
    '@angular/core' : 'dependencies',
    '@angular/forms' : 'dependencies',
    '@angular/http' : 'dependencies',
    '@angular/platform-browser' : 'dependencies',
    '@angular/platform-browser-dynamic' : 'dependencies',
    '@angular/router' : 'dependencies',
    '@angular/router-deprecated' : 'dependencies',
    '@angular/upgrade' : 'dependencies',
    'app': 'app', // 'dist',
    'rxjs': 'dependencies/rxjs'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { main: 'rx.umd.min.js', defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    '@angular/common': { main: 'common.umd.min.js', defaultExtension: 'js' },
    '@angular/compiler': { main: 'compiler.umd.min.js', defaultExtension: 'js' },
    '@angular/core': { main: 'core.umd.min.js', defaultExtension: 'js' },
    '@angular/forms': { main: 'forms.umd.min.js', defaultExtension: 'js' },
    '@angular/http': { main: 'http.umd.min.js', defaultExtension: 'js' },
    '@angular/platform-browser': { main: 'platform_browser.umd.min.js', defaultExtension: 'js' },
    '@angular/platform-browser-dynamic': { main: 'platform_browser_dynamic.umd.min.js', defaultExtension: 'js' },
    '@angular/router': { main: 'router.umd.min.js', defaultExtension: 'js' },
    '@angular/router-deprecated': { main: 'router_deprecated.umd.min.js', defaultExtension: 'js' },
    '@angular/upgrade': { main: 'upgrade.umd.min.js', defaultExtension: 'js' }
  };
  /*
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  */
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
