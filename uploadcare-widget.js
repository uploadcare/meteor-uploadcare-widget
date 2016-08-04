import uploadcare from 'uploadcare-widget';

const meteorUploadcareSettings = ((Meteor.settings || {}).public || {}).uploadcare || {};

if(!!meteorUploadcareSettings) {
  uploadcare.start(meteorUploadcareSettings);
}

export default uploadcare;