module.exports = {
  description: 'default blueprint for ember-cli-pixelate-image',

  afterInstall: function(options) {
    return this.addBowerPackageToProject('pixelate');
  }

};
