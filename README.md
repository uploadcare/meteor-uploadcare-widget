# meteor-uploadcare-widget
The official Meteor package for [Uploadcare widget](https://uploadcare.com/documentation/widget/).

## Install

```
meteor add uploadcare:uploadcare-widget
```

## Usage

### Public key

Set your [public key](https://uploadcare.com/documentation/keys/).

You can use [Meteor application settings](https://guide.meteor.com/deployment.html#environment) for set the public key.

Add `uploadcare` to settings under a special key called `public`, it will be available on the client.

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

Run application with settings file:

```
meteor --settings settings.json
```

### HTML element

Place following `input` element somewhere in your templates.

```html
<input type="hidden" role="uploadcare-uploader" name="my_file" />
```

This is where the widget will be. Don't forget the name attribute!

The library looks for inputs with special `role` attribute, and places widgets there. As soon as the file is uploaded, this `input` will receive CDN link with file UUID.


## Configuration

The widget is highly customizable through widget options. You can check out the [configuration page](https://uploadcare.com/widget/configure/) to see some of them in action.

There are two ways to set widget options. Global options are set when page loads, local every time when the new widget is created. Changing any options during widget operation won't affect the widget.

### Global variables

Specified as global Meteor settings, for example in a `settings.json` file:

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

On second way, specified as global JavaScript variables in a `<script>` tag, for example:

```html
<script>
    UPLOADCARE_PUBLIC_KEY = 'demopublickey';
    UPLOADCARE_IMAGES_ONLY = true;
</script>
```

### Local attributes

Specified in the target `<input>` tag as `data-*` attributes, for example:

```html
<input
    type="hidden"
    role="uploadcare-uploader"
    data-public-key="demopublickey"
    data-images-only
/>
```

## JavaScript API

You may not need all of the features that [our widget](https://uploadcare.com/documentation/widget/) exhibits. Or, perhaps, you want to redesign the user experience, but don't want to reinvent the wheel. Or the task is simply to build some UI on top of the widget. For all these use cases we provide a [JavaScript API](https://uploadcare.com/documentation/javascript_api/). Use it to control the default widget, or do stuff without it via standalone components that can be combined with your own solutions.

### Use JavaScript API in Meteor app

```javascript
import uploadcare from 'meteor/uploadcare:uploadcare-widget'
```

```javascript
let widget = uploadcare.Widget('[role=uploadcare-uploader]')

widget.onUploadComplete((info) => {
  // Handle uploaded file info.
})
```



