import {Tinytest} from 'meteor/tinytest';
import uploadcare from 'meteor/uploadcare:uploadcare-widget';

Tinytest.add('uploadcare-widget - uploadcare is object', function(test) {
	test.equal(typeof uploadcare, 'object');
});

Tinytest.add('uploadcare-widget - uploadcare has Widget function', function(test) {
	test.equal(typeof uploadcare.Widget, 'function');
});
