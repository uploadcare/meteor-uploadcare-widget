Npm.depends({'uploadcare-widget': '2.10.3'})

Package.describe({
	name: 'uploadcare:uploadcare-widget',
	version: '1.1.3',
	summary: 'The official Meteor package for the Uploadcare widget',
	git: 'https://github.com/uploadcare/meteor-uploadcare-widget.git',
	documentation: 'README.md',
})

Package.onUse(function(api) {
	api.versionsFrom('1.3.2')
	api.use('ecmascript')
	api.mainModule('uploadcare-widget.js', 'client')
})

Package.onTest(function(api) {
	api.use('ecmascript')
	api.use('tinytest')
	api.use('uploadcare:uploadcare-widget')
	api.mainModule('uploadcare-widget-tests.js', 'client')
})
