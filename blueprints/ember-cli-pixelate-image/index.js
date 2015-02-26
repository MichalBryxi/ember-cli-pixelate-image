module.exports = {
  description: 'default blueprint for ember-cli-pixelate-image',

  normalizeEntityName: function() {
    //no required entity name
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('pixelate');
  }

};
