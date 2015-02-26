/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pixelate-image',

  included: function(app) {
    app.import(app.bowerDirectory + '/pixelate/pixelate.js');
  }
};
