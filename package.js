Npm.depends({'uploadcare-widget': '2.9.0'})

Package.describe({
	name: 'uploadcare:uploadcare-widget',
	version: '1.0.0',
	summary: 'Official Meteor package for Uploadcare widget',
	git: 'https://github.com/uploadcare/meteor-uploadcare-widget.git',
	documentation: 'README.md',
})

Package.onUse(function(api) {
	api.use('ecmascript@0.5.7')
	api.mainModule('uploadcare-widget.js', 'client')
})

Package.onTest(function(api) {
	api.use('ecmascript@0.5.7')
	api.use('tinytest@1.0.11')
	api.use('uploadcare:uploadcare-widget')
	api.mainModule('uploadcare-widget-tests.js', 'client')
})
