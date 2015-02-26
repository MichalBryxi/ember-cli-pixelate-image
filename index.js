/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pixelate-image',

  config: function(environment, appConfig) {
    //add data to content security policy
    var imgSrcPolicy = appConfig.contentSecurityPolicy['img-src'];
    if (!/data:/.test(imgSrcPolicy)) {
      imgSrcPolicy = imgSrcPolicy + " data:";
    }
    return {
      contentSecurityPolicy: {
        'img-src': imgSrcPolicy
      }
    };
  },

  included: function(app) {
    app.import(app.bowerDirectory + '/pixelate/pixelate.js');
    app.import('vendor/pixelate-image.css');
  }
};
