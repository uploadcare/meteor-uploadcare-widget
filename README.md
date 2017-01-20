# meteor-uploadcare-widget

[![Build Status](https://travis-ci.org/uploadcare/meteor-uploadcare-widget.svg?branch=master)](https://travis-ci.org/uploadcare/meteor-uploadcare-widget)

The official Meteor package for the
[Uploadcare widget](https://uploadcare.com/documentation/widget/).

## Install

```
meteor add uploadcare:uploadcare-widget
```

## Usage

### Public key

Discover your Uploadcare
[public key](https://uploadcare.com/documentation/keys/)
and use [Meteor application settings](https://guide.meteor.com/deployment.html#environment)
to set the key for Meteor.

Add `uploadcare` to your settings under a
`public` key, this will make Uploadcare settings
available for your Meteor client.

For example, `settings.json` file:

```json
{
  "public": {
    "uploadcare": {
      "publicKey": "YOUR_PUBLIC_KEY"
    }
  }
}
```

Run Meteor application with `settings.json`
as settings file:

```
meteor --settings settings.json
```

### HTML element

Place the following `input` element somewhere
into your templates.

```html
<input type="hidden" role="uploadcare-uploader" name="my_file" />
```
By inserting the line you define where the widget
will be positioned on a page.
Don't forget about the `name` attribute to
further fine-tune your elements behavior.

The library looks for inputs with the `role` attribute,
and places widgets there.
As soon as a file gets uploaded, that `input` receives
a CDN link with file UUID.


## Configuration

The widget is highly customizable through widget options.
You might want to check out the
[configuration page](https://uploadcare.com/widget/configure/)
to see some of them in action.

There are two ways to set widget options,

* Global options are set when a page loads.
* Local options — every time a new widget is created.

Please note, changing any options during widget operation
won't affect its behavior.

### Global variables

Global variables are specified as
global Meteor settings. For example, in a `settings.json` file:

```json
{
  "public": {
    "uploadcare": {
      "publicKey": "demopublickey",
      "imagesOnly": true
    }
  }
}
```

Another way to specify those is through
global JavaScript variables within a `<script>` tag, like here,

```html
<script>
    UPLOADCARE_PUBLIC_KEY = 'demopublickey';
    UPLOADCARE_IMAGES_ONLY = true;
</script>
```

### Local attributes

Local attributes are specified in
the target `<input>` tag as `data-*` attributes, for example,

```html
<input
    type="hidden"
    role="uploadcare-uploader"
    data-public-key="demopublickey"
    data-images-only
/>
```

## JavaScript API

You might not want to use all the features that
[our widget](https://uploadcare.com/documentation/widget/) exhibits.
Or, perhaps, you might want to redesign the user experience
without having to reinvent the wheel.
Maybe, you're in pursuit of building a UI on top of the widget.
For all of those use cases, we provide a
[JavaScript API](https://uploadcare.com/documentation/javascript_api/).
Feel free to control the default widget with it,
or make use of its standalone components that
can be combined with your own solutions.

### Use JavaScript API in Meteor app

```javascript
import uploadcare from 'meteor/uploadcare:uploadcare-widget'
```

```javascript
let widget = uploadcare.Widget('[role=uploadcare-uploader]')

widget.onUploadComplete((info) => {
  // Handle an uploaded file info.
})
```

## Demo

[See our demo source](https://github.com/uploadcare/meteor-uploadcare-widget-demo).

## Contributors

* [@Zmoki](https://github.com/Zmoki)
