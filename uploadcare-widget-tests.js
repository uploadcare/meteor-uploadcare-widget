// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by uploadcare-widget.js.
import uploadcare from "meteor/uploadcare:uploadcare-widget";

Tinytest.add('uploadcare-widget - uploadcare is object', function (test) {
  test.equal(typeof uploadcare, "object");
});

Tinytest.add('uploadcare-widget - uploadcare has Widget function', function (test) {
  test.equal(typeof uploadcare.Widget, "function");
});
