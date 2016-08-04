Npm.depends({
  'uploadcare-widget': '2.9.0'
});

Package.describe({
  name: 'uploadcare:uploadcare-widget',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('ecmascript');
  api.mainModule('uploadcare-widget.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('uploadcare:uploadcare-widget');
  api.mainModule('uploadcare-widget-tests.js', 'client');
});
